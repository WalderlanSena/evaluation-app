import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DashboardStack from './DashboardStack';
import { AuthContext } from '../hooks/AuthContext';
import AppStack from './AppStack';

export default function Routes() {
  const { signed, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return (
      <View
        styles={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color={'#371585'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {signed ? <DashboardStack /> : <AppStack />}
    </NavigationContainer>
  );
}
