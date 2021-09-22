import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Surveyor from '../pages/Surveyor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pricing from '../pages/Pricing';

export default function WorkplaceTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#371585',
        inactiveTintColor: 'gray',
        showIcon: true,
      }}>
      <Tab.Screen
        name="Surveyor"
        component={Surveyor}
        options={{
          tabBarLabel: 'Vistoriador',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-search" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pricing"
        component={Pricing}
        options={{
          tabBarBadge: 4,
          tabBarLabel: 'Precificador',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cash-multiple" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
