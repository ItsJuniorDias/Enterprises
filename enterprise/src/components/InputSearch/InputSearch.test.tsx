import React from 'react';
import { render } from '@testing-library/react-native';

import { InputSearch } from '../InputSearch/InputSearch';

describe('Behavior InputSearch', () => {
  const handleFilterValue = jest.fn();

  const screenRender = (
    <InputSearch
      title="Buscar por nome"
      name="filter"
      callBackParent={(value) => handleFilterValue(value)}
    />
  );

  it('render snapshot', () => {
    const result = render(screenRender).toJSON();

    expect(result).toMatchSnapshot();
  });
});
