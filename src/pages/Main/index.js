import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, } from 'react-native';

import {Button,Image, Text} from 'react-native-elements';

import ImagePicker from 'react-native-image-picker';

import {Container, ProductAreaView} from './styles';

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

  const { navigate } = navigation;

  function imagePickerCallback(data) {
    // if (data.didCancel) {
    //   return;
    // }

    // if (data.error) {
    //   return;
    // }

    // if (data.customButton) {
    //   return;
    // }

    // if (!data.uri) {
    //   return;
    // }

    setAvatar(data);
    console.log(data)
  }

  async function uploadImage() {
    const data = new FormData();

    data.append('avatar', {
      fileName: avatar.fileName,
      uri: avatar.uri,
      type: avatar.type,
    });

    await Axios.post('http://localhost:3333/files', data);
  }

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
    };
    
      launchCamera(options, (response) => {
        console.log('Response = ', response);

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
        console.log(JSON.stringify(response.assets[0]))
     
        setFilePath(res.split('"').join(''))
      });
    }

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

      navigate('Imageview', {
        paramKey: res.split('"').join(''),
      })
    });
  }

  return (
    <Container source>
      <Header navigation={navigation} />
      <ProductAreaView>
        {/* <Button
          title="Capture to cam"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{color: 'white', marginHorizontal: 20}}
          onPress={() => captureImage('photo')}
        /> */}

        <Button
          title="Import to gallary"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{color: 'white', marginHorizontal: 20}}
          onPress={() => { navigate('Imageview') }}
        />
      </ProductAreaView>
    </Container>
  );
}
