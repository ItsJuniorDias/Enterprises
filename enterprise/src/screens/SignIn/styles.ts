import styled from 'styled-components/native';
import { Colors, Fonts } from '../../theme';

type TouchableTextProps = {
  isAlign: boolean;
};

type TextProps = {
  isBold?: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${Colors.brand.secondary};
  font-family: ${Fonts.semiBold};
`;

export const Header = styled.View`
  margin-top: 32px;
`;

export const Body = styled.View`
  margin-top: 73px;
`;

export const TouchableText = styled.TouchableOpacity<TouchableTextProps>`
  width: 100%;
  flex-direction: row;
  justify-content: ${({ isAlign }) => (isAlign ? 'center' : 'flex-end')};
  margin-top: ${({ isAlign }) => (isAlign ? '24px' : '8px')};
`;

export const Text = styled.Text<TextProps>`
  font-size: 14px;
  color: #2d4379;
  font-family: 'Poppins-Regular';
  margin-right: 8px;
  font-weight: ${({ isBold }) => (isBold ? 700 : 400)};
`;

export const TextFooter = styled.Text`
  font-size: 14px;
  color: #2d4379;
  font-family: 'Poppins-Regular';
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Footer = styled.View`
  margin-top: 135px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
