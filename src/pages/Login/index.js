import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements';

import {
  Container,
  ProductAreaView,
  Title
} from './styles';


export default function Login({ navigation }) {
  const { navigate } = navigation;

  return (
    <Container>
      <ProductAreaView>

      <Title>
        Be sure about colors in your everyday life
      </Title>

      <Button
        title="First Access"
        onPress={( )=>{ navigate('Main') }}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      />
      <Button
        title="I have an Account"
        onPress={( )=>{ navigate('Main')}}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      />      

      </ProductAreaView>
    </Container>
  );
}
