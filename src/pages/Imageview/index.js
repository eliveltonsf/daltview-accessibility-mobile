import React, { useEffect } from 'react';

import {Container, ProductAreaView, Image} from './styles';

import PixelColor from 'react-native-pixel-color';

export default function Imageview({route}) {

  useEffect(() => {
    PixelColor.getHex(route.params.paramKey, {x: 50, y: 60}).then().catch((err) => {
       console.log(err)
     });
  }, []);  


  return (
    <Container >
      <ProductAreaView>
        <Image
          source={{uri: route.params.paramKey}}
        />

      </ProductAreaView>
    </Container>
  );
}
