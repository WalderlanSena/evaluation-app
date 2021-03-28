import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes/routes';
import RootContext from './hooks/RootContext';

export default function App() {
  return (
    <RootContext>
      <Routes />
    </RootContext>
  );
}
