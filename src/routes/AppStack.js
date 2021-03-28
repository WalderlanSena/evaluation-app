import React from 'react';
import SignIn from '../pages/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import ForgetPassword from '../pages/ForgotPassword';

export default function AppStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
