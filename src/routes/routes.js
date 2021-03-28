import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DashboardStack from './DashboardStack';
import { AuthContext } from '../hooks/AuthContext';
import AppStack from './AppStack';

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {signed ? <DashboardStack /> : <AppStack />}
    </NavigationContainer>
  );
}
