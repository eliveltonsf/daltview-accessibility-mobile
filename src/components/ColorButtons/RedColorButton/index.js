import React, { useState } from 'react';
import {Button} from "./styles"

export default function RedColorButton({getRedColor}){

  const [statusColor, setStatusColor] = useState(false)

  let redColorArray = {
    colorID : 4,
    rangeColor :[]
  };

  const redColorBefore180 = () => {
    setStatusColor(true)

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
        redColorArray.rangeColor.push({h: ih, s:is, v:255});
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
        redColorArray.rangeColor.push({h: ih, s:is, v:255});
      }      
    }
  }

  return (
    <Button disabled={statusColor} title="Vermelho" onPress={() => {
      redColorAfter0()
      redColorBefore180()
      getRedColor(redColorArray)}
    } />
  );
}
