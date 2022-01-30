import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  flex: 1;
`;

export const ProductAreaView = styled.SafeAreaView`
  justify-content: flex-end;
  align-items: center;
  height: 80%;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ProductContainer = styled.View`
  border-radius: 4px;
  margin: 10px 30px;
  padding: 20px;
  background-color: #fff;
`;

export const Image = styled.Image`
  align-self: center;
  width: 294px;
  height: 89px;
  background-image: url("../../assets/images/logoDalto.png");
  background-repeat: no-repeat;
  margin-top: 230px;
  margin-bottom:90px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 10px;
  font-size: 16px;
  line-height: 20px;
  color: #2c8057;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 10px;
  color: #000;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: 36px;
  margin-top: 10px;
  border-radius: 4px;
  background: #78cea5;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const ProductAmount = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
export const FirstAcessButton = styled.Button`
  color: #6f6f6f;
  background: #fff;
  width: 80%;
  align-self: center;
  margin: 20px auto;
  margin-top: 40px;
`;
export const AccountButton = styled.Button`
  color: #fff;
  background: #6f6f6f;
  width: 80%;
  align-self: center;
  
`;