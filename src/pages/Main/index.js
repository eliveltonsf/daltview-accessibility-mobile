import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, CheckBox} from 'react-native';

import {Image} from 'react-native-elements';

import {launchImageLibrary} from 'react-native-image-picker';

import {
  Container,
  ProductAreaView,
  ContainerImage,
  Button,
  ButtonText,
} from './styles';

Icon.loadFont();

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default function Main({navigation}) {
  const [avatar, setAvatar] = useState();

  const {navigate} = navigation;

  function chooseFile(type) {
    let options = {
      mediaType: type,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      const res = JSON.stringify(response.assets[0].uri);
      setAvatar(res.split('"').join(''));
    });
  }

  return (
    <Container source>
      <Header navigation={navigation} />

      <ContainerImage>
        <Image source={{uri: avatar}} style={{width: 350, height: 300}} />
      </ContainerImage>

      <ProductAreaView>
        <Button
          title="Import"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{color: 'white', marginHorizontal: 20}}
          onPress={() => chooseFile('photo')}>
          <ButtonText>Import</ButtonText>
        </Button>

        <Button
          title="Exemplo"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{color: 'white', marginHorizontal: 20}}
          onPress={() => {
            navigate('Imageview');
          }}>
          <ButtonText>Exemplo</ButtonText>
        </Button>
      </ProductAreaView>
    </Container>
  );
}
