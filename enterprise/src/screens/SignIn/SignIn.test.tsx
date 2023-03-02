import React from 'react';
import { render } from '@testing-library/react-native';
import { SignIn } from '../SignIn/SignIn';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Behavior SignIn', () => {
  const screenRender = <SignIn />;

  it('render snapshot', () => {
    const result = render(screenRender).toJSON();

    expect(result).toMatchSnapshot();
  });
});
