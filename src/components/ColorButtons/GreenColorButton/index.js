import React, { useState } from 'react';
import {Button, ButtonText} from "./styles"

export default function GreenColorButton({getGreenColor}){

  const [statusColor, setStatusColor] = useState(false)

  let greenColorArray = {
    colorID : 2,
    rangeColor:[]
  };

  const GreenColor = () => {
    setStatusColor(true)

    const initialRange = {
      h: 36,
      s: 100,
      v: 255
    };

    const finishedRange = {
      h: 65,
      s: 255,
      v: 255
    };

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        greenColorArray.rangeColor.push({ h: ih, s: is, v: initialRange.v });
      }
    }
  };

  return (
    <Button disabled={statusColor} title="Verde" onPress={() => {
      GreenColor()
      getGreenColor(greenColorArray)}
    } >
      <ButtonText>Verde</ButtonText>
    </Button>
  );
}
