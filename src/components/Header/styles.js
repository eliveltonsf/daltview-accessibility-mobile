import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const LinkLogo = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 100px;
`;

export const ContainerCart = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

export const Items = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #78cea5;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 20px;
`;
