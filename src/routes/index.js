import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabIcons } from '../utils/Icons';

import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Pay from '../screens/Pay';
import Wallet from '../screens/Wallet';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Routes() {
 return (
   <Tab.Navigator
    screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = TabIcons[route.name];
            return <Icon name={name} size={size} color={color}/>
        },
    })}
    tabBarOptions={{
        style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255,255,255,0.2)'
        }
    }}    
   >
       <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            title: "Inicio",
        }}
       />

        <Tab.Screen 
        name="Wallet" 
        component={Wallet}
        options={{
            title: 'Carteira',
        }}
        />


       <Tab.Screen 
        name="Pay" 
        component={Pay}
        options={{
            title: "Pagar",
        }}
       />

        <Tab.Screen 
        name="Notifications" 
        component={Notifications}
        options={{
            title: 'Notificações',
        }}
       />

        <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
            title: 'Configurações',
        }}
       />
   </Tab.Navigator>
  );
}