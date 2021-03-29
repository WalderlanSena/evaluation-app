import React from 'react';
import { AuthProvider } from './AuthContext';

export default function RootContext({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
