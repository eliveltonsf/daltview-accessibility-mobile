import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import RedColorButton from '../../components/ColorButtons/RedColorButton';
import GreenColorButton from '../../components/ColorButtons/GreenColorButton';
import BlueColorButton from '../../components/ColorButtons/BlueColorButton';
import YellowColorButton from '../../components/ColorButtons/YellowColorButton';
import PinkColorButton from '../../components/ColorButtons/PinkColorButton';

import Chip from '@mui/material/Chip'

import {
  Container,
  ConfigAreaView,
  Title,
  RedCard,
  GreenCard,
  BlueCard,
  YellowCard,
  PinkCard
} from './styles';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Config({ navigation }) {

  const [redColor, setRedColor] = useState()
  const [blueColor, setBlueColor] = useState()
  const [pinkColor, setPinkColor] = useState()
  const [yellowColor, setYellowColor] = useState()
  const [greenColor, setGreenColor] = useState()

  const [chipData, setChipData] = useState([]);

  

  const array = []
  const allColors = array.concat(redColor,blueColor,pinkColor,yellowColor,greenColor)
  console.log(allColors)
  
  const getRedColor = (redColor) => {
    setRedColor(redColor)
    setChipData(... {key:0, label:"Vermelho"})
  }
  const getBlueColor = (blueColor) => {
    setBlueColor(blueColor)
    setChipData(... {key:1, label:"Azul"})
  }
  const getPinkColor = (pinkColor) => {
    setPinkColor(pinkColor)
    setChipData(... {key:2, label:"Rosa"})

  }
  const getYellowColor = (yellowColor) => {
    setYellowColor(yellowColor)
    setChipData(... {key:3, label:"Amarelo"})

  }
  const getGreenColor = (greenColor) => {
    setGreenColor(greenColor)
    setChipData(... {key:4, label:"Verde"})

  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  
  return (
    <Container source>
      <ConfigAreaView>
        <Title>
          We found the colors for you, select your preferred colors.
        </Title>
        <RedColorButton getRedColor={getRedColor}/>
        <GreenColorButton getGreenColor={getGreenColor}/>
        <BlueColorButton getBlueColor={getBlueColor}/>
        <YellowColorButton getYellowColor={getYellowColor}/>
        <PinkColorButton getPinkColor={getPinkColor}/>
        <CardsContainer>
          
        {chipData.map((data) => {
        
        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}

        </CardsContainer>
      </ConfigAreaView>
    </Container>
  );
}
