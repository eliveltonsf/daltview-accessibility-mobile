import React, { useState } from 'react';
import {Button} from "react-native";

export default function YellowColorButton({getYellowColor}){

  const [statusColor, setStatusColor] = useState(false)

  let yellowColorArray = {
    colorID = 5,
    rangeColor=[]
  };

  const YellowColor = () => {
    setStatusColor(true)

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
        yellowColorArray.rangeColor.push({ h: ih, s: is, v: initialRange.v });
      }
    }
  };

  return (
    <Button disabled={statusColor} title="Amarelo" onPress={() => {
      YellowColor()
      getYellowColor={yellowColorArray}}
    } />
  );
}
