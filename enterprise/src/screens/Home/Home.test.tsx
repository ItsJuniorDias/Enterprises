import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from '../Home/Home';
import { Provider } from 'react-redux';
import store from 'store';

jest.mock('react-native-shimmer-placeholder', () => {
  return {
    createShimmerPlaceholder: jest.fn(),
  };
});
jest.mock('react-native-linear-gradient', () => {});
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Behavior Home', () => {
  const screenRender = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  it('render snapshot', () => {
    const result = render(screenRender).toJSON();

    expect(result).toMatchSnapshot();
  });
});
