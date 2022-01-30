import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Main from './pages/Main';
import Config from './pages/Config';
import Imageview from './pages/Imageview';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'rgba(39, 39, 39, 1)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'rgba(39, 39, 39, 1)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          title: 'Configurações',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'rgba(39, 39, 39, 1)',
          },
          headerTintColor: '#fff',
        }}
      />
       <Stack.Screen
        name="Imageview"
        component={Imageview}   
        options={{
          headerLeft: null
        }}    
      />
    </Stack.Navigator>
  );
}

export default Routes;
