import React, {useState, useEffect} from 'react';
// import { Button } from 'react-native-elements';

import {
  Container,
  ProductAreaView,
  Title,
  Logo,
  Button,
  ButtonText,
  ContainerLogo
} from './styles';


import logo from '../../assets/images/logoDalto.png';

export default function Login({navigation}) {
  const {navigate} = navigation;

  return (
    <Container>
     
      <ContainerLogo>
         <Logo source={logo} alt="DaltView" />
      </ContainerLogo>
     


      <ProductAreaView>
        <Title>Be sure about colors in your everyday life</Title>   

        <Button
          title="First Access"
          onPress={() => {
            navigate('Main');
          }}
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}>
          <ButtonText>First Access</ButtonText>
        </Button>
        <Button
          title="I have an Account"
          onPress={() => {
            navigate('Main');
          }}
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
        >
           <ButtonText>I have an Account</ButtonText>
        </Button>
      </ProductAreaView>
    </Container>
  );
}
