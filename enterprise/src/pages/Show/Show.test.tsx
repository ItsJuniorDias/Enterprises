import React from 'react';
import { render } from '@testing-library/react-native';
import { Show } from '../Show/Show';
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

describe('Behavior Show', () => {
  const screenRender = (
    <Provider store={store}>
      <Show />
    </Provider>
  );

  it('render snapshot', () => {
    const result = render(screenRender).toJSON();

    expect(result).toMatchSnapshot();
  });
});
