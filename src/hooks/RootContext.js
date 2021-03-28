import React from 'react';
import { Auth } from './AuthContext';

export default function RootContext({ children }) {
  return <Auth>{children}</Auth>;
}
