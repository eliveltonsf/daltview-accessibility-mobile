import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import RedColorButton from '../../components/ColorButtons/RedColorButton';
import GreenColorButton from '../../components/ColorButtons/GreenColorButton';
import BlueColorButton from '../../components/ColorButtons/BlueColorButton';
import YellowColorButton from '../../components/ColorButtons/YellowColorButton';
import PinkColorButton from '../../components/ColorButtons/PinkColorButton';



import {
  Container,
  ConfigAreaView,
  Title
} from './styles';

export default function Config({ navigation }) {

  const [redColor, setRedColor] = useState()
  const [blueColor, setBlueColor] = useState()
  const [pinkColor, setPinkColor] = useState()
  const [yellowColor, setYellowColor] = useState()
  const [greenColor, setGreenColor] = useState()

  const array = []
  const allColors = array.concat(redColor,blueColor,pinkColor,yellowColor,greenColor)

  const getRedColor = (redColor) => {
    setRedColor(redColor)
  }
  const getBlueColor = (blueColor) => {
    setBlueColor(blueColor)
  }
  const getPinkColor = (pinkColor) => {
    setPinkColor(pinkColor)
  }
  const getYellowColor = (yellowColor) => {
    setYellowColor(yellowColor)
  }
  const getGreenColor = (greenColor) => {
    setGreenColor(greenColor)
  }

  return (
    <Container source>
      <ConfigAreaView>
        <Title>
          We found the colors for you, select your preferred colors.
        </Title>
        <RedColorButton getRedColor={getRedColor}/>
        <GreenColorButton getGreenColor={getGreenColor}/>
        <BlueColorButton getBlueColor={getBlueColor} />
        <YellowColorButton getYellowColor={getYellowColor}/>
        <PinkColorButton getPinkColor={getPinkColor}/>
      </ConfigAreaView>
    </Container>
  );
}
