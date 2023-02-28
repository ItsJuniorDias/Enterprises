import React, { Component } from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button/Button';

jest.mock('react-native-gesture-handler', () => ({
  RectButton: jest.fn().mockReturnValue(() => jest.fn()),
}));

describe('Behavior Button', () => {
  it('should render button', () => {
    const result = render(<Button children="Entrar" />).toJSON();

    expect(result).toMatchSnapshot();
  });
});
