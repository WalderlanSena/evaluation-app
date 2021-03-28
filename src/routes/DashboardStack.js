import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import {Button} from 'react-native';
import {AuthContext} from '../hooks/AuthContext';

export default function DashboardStack() {
  const {auth, setAuth} = useContext(AuthContext);
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#371585',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => setAuth({...auth, signed: false})}
              title="Sair"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
