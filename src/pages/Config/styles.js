import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ConfigAreaView = styled.SafeAreaView`
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 380px;
`;

export const ConfigContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-color: #78cea555;
`;

export const ConfigLeft = styled.View``;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin: 0 20px 10px 0;
`;

export const ConfigUpdateAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonLess = styled.TouchableOpacity``;

export const ButtonPlus = styled.TouchableOpacity``;

export const InputAmount = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 50px;
  height: 30px;
  margin: 0 5px;
`;

export const ConfigRight = styled.View`
  justify-content: space-between;
  width: 230px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Tshirt = styled.Text`
  font-size: 16px;
  color: #2c8057;
`;

export const ButtonDeleteConfig = styled.TouchableOpacity``;

export const Title = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 16px;
  color: black;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Unitario = styled.View`
  align-items: center;
  font-size: 14px;
  padding-top: 60px;
`;

export const Scratched = styled.View`
  align-items: center;
  font-size: 14px;
  padding-top: 60px;
`;

export const Text = styled.Text`
  color: #666;
  text-transform: uppercase;
`;

export const PriceUnitario = styled.Text`
  font-size: 16px;
`;

export const TextScratched = styled.Text`
  color: #666;
  text-decoration: line-through;
  text-transform: uppercase;
`;

export const ResumeContainer = styled.View`
  padding: 10px;
  background: #fff;
`;

export const ResumeTitle = styled.Text`
  color: #666;
  margin: 5px 0 10px 25px;
  font-size: 18px;
  text-transform: uppercase;
`;
export const Resume = styled.View`
  padding: 10px 30px;
  background: #f5f5f5;
  border-radius: 4px;
`;

export const InforResumo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleSubtotal = styled.Text`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

export const PriceSubtotal = styled.Text`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;
export const TitlePriceSaved = styled.Text`
  margin: 10px 0;
  font-size: 16px;
  color: #666;
`;

export const Total = styled.Text`
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #666;
`;

export const PriceTotal = styled.Text`
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  color: #78cea5;
`;

export const ButtonPurchase = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  height: 36px;
  margin-top: 10px;
  border-radius: 4px;
  background: #78cea5;
`;

export const TextPurchase = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;
export const RedCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const GreenCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const BlueCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const YellowCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const PinkCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardsContainer = styled.View`
`;
