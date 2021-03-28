import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

export const Auth = ({children}) => {
  const initialState = {
    signed: false,
    token: null,
    loading: '',
  };

  const [auth, setAuth] = useState(initialState);

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
