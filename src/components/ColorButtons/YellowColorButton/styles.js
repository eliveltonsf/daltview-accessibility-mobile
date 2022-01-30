import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';


export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: 36px;
  margin: 10px 20px;
  border-radius: 4px;
  background: #6F6F6F;
  color: #000;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;