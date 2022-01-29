import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Config from './pages/Config';

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
            backgroundColor: '#000',
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
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
