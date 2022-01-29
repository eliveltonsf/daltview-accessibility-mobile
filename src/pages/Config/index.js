import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  ConfigAreaView
} from './styles';

export default function Config({ navigation }) {

  return (
    <Container source>
      <ConfigAreaView>
        {/* <Text>Config</Text> */}
      </ConfigAreaView>
    </Container>
  );
}
