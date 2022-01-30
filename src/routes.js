import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Config from './pages/Config';
import Imageview from './pages/Imageview';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Main">
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
      />
    </Stack.Navigator>
  );
}

export default Routes;
