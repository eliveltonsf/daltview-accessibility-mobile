import React, { useEffect } from 'react';

import {Container, ProductAreaView, Image} from './styles';

import Canvas, {Image as CanvasImage} from 'react-native-canvas';

export default function Imageview({route}) {

  handleCanvas =  (canvas) => {
    const image = new CanvasImage(canvas);
    canvas.width = 400;
    canvas.height = 700;
    
    const context = canvas.getContext('2d');

    image.src = 'https://i.ibb.co/hZz6ft0/testenew.jpg';

    //'https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg'; Note: with this uri everything works well

     image.addEventListener('load', () => {
      debugger
      console.log('image is loaded');
      context.drawImage(image, 0, 0, 400, 700);
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
