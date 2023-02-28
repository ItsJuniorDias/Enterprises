import React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from '../Button/Button';

jest.mock('react-native-gesture-handler', () => {
  return {
    RectButton: jest.fn(() => {
      return jest.fn();
    }),
  };
});

describe('Behavior Button', () => {
  it('should render button', () => {
    const { getByTestId, debug } = render(<Button>Assinar</Button>);

    debug();

    // const button = getByTestId('buttonId');

    // expect(button).toBeTruthy();
  });
});
