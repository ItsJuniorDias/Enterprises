import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: #376aed;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 54px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  color: #fff;
  font-size: 18px;
`;
