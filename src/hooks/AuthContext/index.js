import React, { createContext, useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const INITIAL_STATE = {
    signed: false,
    token: null,
    loading: false,
    error: false,
  };

  const [auth, setAuth] = useState(INITIAL_STATE);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const getStorage = async () => {
      const token = await AsyncStorage.getItem('@evaluationApp:token');
      const signed = await AsyncStorage.getItem('@evaluationApp:signed');

      if (token && signed) {
        setAuth({
          token: token,
          signed: signed,
          loading: false,
          error: false,
        });
      }
      setLoadingAuth(false);
    };

    getStorage();
  }, [auth]);

  const signIn = useCallback(
    async ({ login, password }) => {
      try {
        setAuth({ ...auth, loading: true });
        const body = {
          username: login,
          password: password,
        };

        const { data } = await api.post('/authentication', body);

        if (data.token) {
          setAuth({ ...auth, loading: false });

          await AsyncStorage.setItem('@evaluationApp:token', data.token);
          await AsyncStorage.setItem('@evaluationApp:signed', 'true');

          setAuth({
            ...auth,
            ...{
              signed: true,
              token: data.token,
              error: false,
            },
          });
        }
      } catch (e) {
        setAuth({
          ...auth,
          error: true,
        });
      }
    },
    [auth],
  );

  const logout = async () => {
    await AsyncStorage.multiRemove([
      '@evaluationApp:token',
      '@evaluationApp:signed',
    ]);

    setAuth({ ...auth, signed: false });
  };

  const { error, signed, loading, token } = auth;

  return (
    <AuthContext.Provider
      value={{
        error,
        signed,
        loading,
        token,
        signIn,
        logout,
        loadingAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
