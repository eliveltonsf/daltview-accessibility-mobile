import React, { useState } from 'react';
import {Button} from "react-native";

export default function YellowColorButton( ){

  let yellowColorArray = [];

  const YellowColor = () => {
    const initialRange = {
      h: 21,
      s: 100,
      v: 255
    };

    const finishedRange = {
      h: 35,
      s: 255,
      v: 255
    };

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        yellowColorArray.push({ h: ih, s: is, v: initialRange.v });
      }
    }
  };

  return (
    <Button title="Amarelo" onPress={() => {
      YellowColor()
      console.log('Amarelo', yellowColorArray)}
    } />
  );
}
