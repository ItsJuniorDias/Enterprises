import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 14px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #0d253c;
  font-family: 'Poppins-SemiBold';
`;

export const Header = styled.View`
  margin-top: 32px;
`;

export const Body = styled.View`
  margin-top: 73px;
`;

export const Forgot = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const TextForgot = styled.Text`
  font-size: 14px;
  color: #2d4379;
  font-family: 'Poppins-Regular';
  margin-right: 8px;
`;

export const TextFooter = styled.Text`
  font-size: 14px;
  color: #2d4379;
  font-family: 'Poppins-Regular';
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const ContentFooter = styled.View`
  background-color: red;
  height: 80px;
  justify-content: flex-start;
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
