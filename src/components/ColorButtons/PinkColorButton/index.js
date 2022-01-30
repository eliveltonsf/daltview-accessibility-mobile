import React, { useState } from 'react';
import {Button} from "react-native";

export default function PinkColorButton({getPinkColor}){

  let pinkColorArray ={ 
    colorID = 3,
    rangeColor=[]
  };
  
  const pinkColor = () => {

    const initialRange = {
      h: 136,
      s: 100,
      v: 255
    }

    const finishedRange = {
      h: 170,
      s: 255,
      v: 255
    }

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        pinkColorArray.rangeColor.push({h: ih, s:is, v:255});
      }      
    }
  }

  return (
    <Button title="Rosa" onPress={() => {
      pinkColor()
      getPinkColor(pinkColorArray)}
    } />
  );
}
