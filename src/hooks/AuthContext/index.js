import React, { useState, createContext } from 'react';
import api from '../../services/api';

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const INITIAL_STATE = {
    signed: false,
    token: null,
    loading: false,
    error: false,
  };

  const [auth, setAuth] = useState(INITIAL_STATE);

  const startLoading = status => {
    setAuth({ ...auth, loading: status });
  };

  const isAuthenticated = ({ token }) => {
    if (token) {
      startLoading(false);
      setAuth({
        ...auth,
        ...{
          signed: true,
          token: token,
          error: false,
        },
      });
    }
  };

  const signIn = async ({ login, password }) => {
    try {
      startLoading(true);
      const body = {
        username: login,
        password: password,
      };

      const { data } = await api.post('/authentication', body);

      isAuthenticated(data);
    } catch (e) {
      setAuth({
        ...auth,
        error: true,
      });
    }
  };

  const logout = () => {
    setAuth({ ...auth, signed: false });
  };

  const { error, signed, loading, token } = auth;

  return (
    <AuthContext.Provider
      value={{ error, signed, loading, token, signIn, logout, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
