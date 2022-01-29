import React, { useState } from 'react';
import {Button} from "react-native";

export default function RedColorButton( ){

  let redColorArray = [];

  const redColorBefore180 = () => {

    const initialRange = {
      h: 170,
      s: 100,
      v: 255
    }

    const finishedRange = {
      h: 180,
      s: 255,
      v: 255
    }

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        redColorArray.push({h: ih, s:is, v:255});
      }      
    }
  }
  
  const redColorAfter0 = () => {

    const initialRange = {
      h: 0,
      s: 100,
      v: 255
    }

    const finishedRange = {
      h: 20,
      s: 255,
      v: 255
    }

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        redColorArray.push({h: ih, s:is, v:255});
      }      
    }
  }

  return (
    <Button title="Vermelho" onPress={() => {
      redColorAfter0()
      redColorBefore180()
      console.log('vermelho', redColorArray)}
    } />
  );
}
