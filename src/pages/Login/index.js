import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Button } from 'react-native-elements';

import {
  Container,
  ProductAreaView
} from './styles';


export default function Login() {

  return (
    <Container source>
      <Header/>
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
