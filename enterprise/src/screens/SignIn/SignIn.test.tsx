import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { SignIn } from '../SignIn/SignIn';
import { AxiosResponse } from 'axios';

const mockResponse = {
  data: {},
  status: 200,
} as AxiosResponse;

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    post: jest.fn().mockImplementation(() => mockResponse),
  })),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Behavior SignIn', () => {
  const screenRender = () => <SignIn />;
  it('render snapshot', () => {
    const result = render(screenRender()).toJSON();

    expect(result).toMatchSnapshot();
  });

  it('should call function handleSignIn', async () => {
    const { getByTestId } = render(screenRender());

    const inputEmail = getByTestId('inputEmail_testID');

    fireEvent.changeText(inputEmail, 'juniordias@live.com');

    inputEmail.props.onSubmitEditing();

    const inputPassword = getByTestId('inputPassword_testID');

    fireEvent.changeText(inputPassword, '1234453');

    inputPassword.props.onSubmitEditing();

    const button = getByTestId('buttonSignIn_testID');

    fireEvent.press(button);

    //TODO expect
  });
});
