import React, { useState, useEffect } from 'react';


import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, FlatList } from 'react-native';

import { Button } from 'react-native-elements';

import {
  Container,
  ProductAreaView
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
      <Button
                title="Import"
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
              />
      </ProductAreaView>
    </Container>
  );
}
