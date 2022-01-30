import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Button } from 'react-native-elements';

import {
  Container,
  ProductAreaView,
  FirstAcessButton,
  AccountButton
} from './styles';


export default function Login({navigation}) {
  const { navigate } = navigation;

  return (
    <Container source>
      <Header/>
      <ProductAreaView>

      <Image/>

      <Title>
        Be sure about colors in your everyday life
      </Title>

      <FirstAcessButton
        title="First Access"
        onPress={( )=>{navigate("Main")}}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      />
      <AccountButton
        title="I have an Account"
        onPress={( )=>{navigate("Main")}}
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
      />
      

      </ProductAreaView>
    </Container>
  );
}
