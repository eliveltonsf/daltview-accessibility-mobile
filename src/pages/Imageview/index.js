import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, } from 'react-native';

import {Button,Image, Text} from 'react-native-elements';

import {launchImageLibrary} from 'react-native-image-picker';

import {Container, ProductAreaView} from './styles';

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

export default function Imageview({route}) {

  return (
    <Container source>
      <ProductAreaView>
        <Image
          source={{uri: route.params.paramKey}}
          style={{ width: 200, height: 200 }}
        />

      </ProductAreaView>
    </Container>
  );
}
