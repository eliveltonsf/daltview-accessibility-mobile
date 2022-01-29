import React, { useState, useEffect } from 'react';


import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, FlatList } from 'react-native';

import {
  Container,
  ProductAreaView,
  ProductContainer,
  Image,
  // List,
  Title,
  Price,
  Button,
  ButtonText,
  IconContainer,
  ProductAmount,
} from './styles';

Icon.loadFont();

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default function Main({ navigation }) {

  return (
    <Container source>
      <Header navigation={navigation} />
      <ProductAreaView>
      </ProductAreaView>
    </Container>
  );
}
