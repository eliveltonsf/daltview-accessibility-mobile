import React, { useEffect } from 'react';

import {Container, ProductAreaView, Image} from './styles';

import Canvas, {Image as CanvasImage} from 'react-native-canvas';

export default function Imageview({route}) {

  handleCanvas =  (canvas) => {
    const image = new CanvasImage(canvas);
    canvas.width = 100;
    canvas.height = 100;
    
    const context = canvas.getContext('2d');

    image.src = route.params.paramKey;

    //'https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg'; Note: with this uri everything works well

     image.addEventListener('load', () => {
      debugger
      console.log('image is loaded');
      context.drawImage(image, 0, 0, 100, 100);
    }); 
  }



  return (
    <Container >
      <ProductAreaView>
        <Canvas ref={this.handleCanvas}/>
      </ProductAreaView>
    </Container>
  );
}
