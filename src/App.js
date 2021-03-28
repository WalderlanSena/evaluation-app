import 'react-native-gesture-handler';
import React from 'react';

import Routes from './routes/routes';
import RootContext from './hooks/RootContext';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <RootContext>
      <FlashMessage position="top" />
      <Routes />
    </RootContext>
  );
}
