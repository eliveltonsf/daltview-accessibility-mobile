import React from 'react';

import logo from '../../assets/images/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, LinkLogo, Logo, ContainerCart, Items } from './styles';

Icon.loadFont();

export default function Header({ navigation }) {
  const { navigate } = navigation;
  return (
    <Container>
      <LinkLogo onPress={() => navigate('Main')}>
        <Logo source={logo} alt="Grolli T Shirt" />
      </LinkLogo>
      <ContainerCart onPress={() => navigate('Config')}>
        <Icon name="shopping-basket" size={30} color="#2c8057" />
      </ContainerCart>
    </Container>
  );
}
