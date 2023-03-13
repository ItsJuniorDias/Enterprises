import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { Colors, Fonts } from '../../theme';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  background-color: ${Colors.brand.primary};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-family: ${Fonts.medium};
  color: ${Colors.neutral[100]};
  font-size: 18px;
`;
