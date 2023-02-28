import React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from '../Button/Button';

describe('Behavior Button', () => {
  it('render snapshot', () => {
    const result = render(<Button>Assinar</Button>).toJSON();

    expect(result).toMatchSnapshot();
  });
  it('should render button', () => {
    const { getByTestId } = render(<Button>Assinar</Button>);

    const button = getByTestId('buttonId');

    expect(button).toBeTruthy();
  });
});
