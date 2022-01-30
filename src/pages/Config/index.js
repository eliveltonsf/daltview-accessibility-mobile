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
  console.log(allColors)
  
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
        { allColors.map((eachColor) => {eachColor.colorID !== 4})?
          <RedColorButton getRedColor={getRedColor}/> :
          <RedColorButton getRedColor={getRedColor} disabled/>
          
          }
        {allColors.map((eachColor) => {eachColor.colorID !== 2})?
          <GreenColorButton getGreenColor={getGreenColor}/> :
          <GreenColorButton getGreenColor={getGreenColor} disabled/> 
          }
        {allColors.map((eachColor) => {eachColor.colorID !== 1})?
          <BlueColorButton getBlueColor={getBlueColor}/> :
          <BlueColorButton getBlueColor={getBlueColor} disabled/>

          }
        {allColors.map((eachColor) => {eachColor.colorID !== 5})?
          <YellowColorButton getYellowColor={getYellowColor}/>:
          <YellowColorButton getYellowColor={getYellowColor} disabled/>

          }
        {allColors.map((eachColor) => {eachColor.colorID !== 3})?
          <PinkColorButton getPinkColor={getPinkColor}/> :
          <PinkColorButton getPinkColor={getPinkColor} disabled/>

          }
      </ConfigAreaView>
    </Container>
  );
}
