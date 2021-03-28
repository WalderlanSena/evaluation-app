import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import { AuthContext } from '../hooks/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DashboardStack() {
  const { logout } = useContext(AuthContext);
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
            <TouchableOpacity onPress={logout}>
              <Icon name={'logout'} size={22} color={'#FFF'} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
