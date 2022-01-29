import React, { useState } from 'react';
import {Button} from "react-native";

export default function BlueColorButton( ){

  let BlueColorArray = [];

  const BlueColor = () => {
    const initialRange = {
      h: 66,
      s: 100,
      v: 255
    };

    const finishedRange = {
      h: 135,
      s: 255,
      v: 255
    };

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        BlueColorArray.push({ h: ih, s: is, v: initialRange.v });
      }
    }
  };

  return (
    <Button title="Azul" onPress={() => {
      BlueColor()
      console.log('Azul', BlueColorArray)}
    } />
  );
}
