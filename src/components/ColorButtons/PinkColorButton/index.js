import React, { useState } from 'react';
import {Button} from "./styles"

export default function PinkColorButton({getPinkColor}){

  const [statusColor, setStatusColor] = useState(false)

  let pinkColorArray ={ 
    colorID : 3,
    rangeColor : []
  };
  
  const pinkColor = () => {
    setStatusColor(true)

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
    <Button disabled={statusColor} title="Rosa" onPress={() => {
      pinkColor()
      getPinkColor(pinkColorArray)}
    } />
  );
}
