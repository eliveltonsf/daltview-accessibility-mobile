import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements';

import {
  Container,
  ProductAreaView,
<<<<<<< HEAD
  Title
=======
  FirstAcessButton,
  AccountButton
>>>>>>> 20918ad77ee28d6a09679fc6f568bfe037a28ba6
} from './styles';


export default function Login({ navigation }) {
  const { navigate } = navigation;

  return (
<<<<<<< HEAD
    <Container>
      <ProductAreaView>

=======
    <Container source>
      <ProductAreaView>
      <Image/>
>>>>>>> 20918ad77ee28d6a09679fc6f568bfe037a28ba6
      <Title>
        Be sure about colors in your everyday life
      </Title>

      <FirstAcessButton
        title="First Access"
        onPress={( )=>{ navigate('Main') }}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      />
      <AccountButton
        title="I have an Account"
        onPress={( )=>{ navigate('Main')}}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      />      

      </ProductAreaView>
    </Container>
  );
}
