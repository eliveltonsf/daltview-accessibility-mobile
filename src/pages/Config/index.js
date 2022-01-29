import React from 'react';
import { StyleSheet } from 'react-native';
import ColorButton from '../../components/ColorButtons/RedColorButton';

import {
  Container,
  ConfigAreaView
} from './styles';

export default function Config({ navigation }) {

  return (
    <Container source>
      <ConfigAreaView>
        <ColorButton />
      </ConfigAreaView>
    </Container>
  );
}
