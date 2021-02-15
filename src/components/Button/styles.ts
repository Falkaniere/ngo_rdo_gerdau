import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: #fecd38;
  height: 56px;
  border-radius: 10px;
  margin-top: 16px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #000;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
