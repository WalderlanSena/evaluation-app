import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../SignIn';
import DashboardStack from './DashboardStack';
import {AuthContext} from '../hooks/AuthContext';

export default function Routes() {
  const Stack = createStackNavigator();
  const {auth} = useContext(AuthContext);

  const signed = auth.signed;

  return (
    <NavigationContainer>
      {signed ? (
        <DashboardStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
