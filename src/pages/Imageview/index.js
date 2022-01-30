import React, { useEffect } from 'react';

import {Container, ProductAreaView, Image} from './styles';

import Canvas, {Image as CanvasImage} from 'react-native-canvas';

export default function Imageview({route}) {

  handleCanvas =  (canvas) => {
    const image = new CanvasImage(canvas);
    canvas.width = 350;
    canvas.height = 500;
    
    const context = canvas.getContext('2d');

    image.src = 'https://leao1918.com.br/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-30-at-17.13.20.jpeg';

    //'https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg'; Note: with this uri everything works well

     image.addEventListener('load', () => {
      debugger
      console.log('image is loaded');
      context.drawImage(image, 0, 0, 350, 500);
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
