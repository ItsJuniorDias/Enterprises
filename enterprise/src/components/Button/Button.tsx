import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

export const Button = ({
  testID = 'buttonId',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container testID={testID} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
