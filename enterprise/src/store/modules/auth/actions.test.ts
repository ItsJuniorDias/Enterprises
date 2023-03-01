import React from 'react';
import {
  loginToAuthFailure,
  loginToAuthRequest,
  loginToAuthSuccess,
  logoutUser,
} from './actions';

describe('Behavior actions', () => {
  const data = {
    email: 'juniordias@live.com',
    password: '124456',
  };
  it('render actions loginToAuthRequest', () => {
    const result = loginToAuthRequest(data);

    expect(result).toMatchObject({
      type: 'LOGIN_AUTH_REQUEST',
    });
  });

  it('render actions loginToAuthSuccess', () => {
    const result = loginToAuthSuccess(data);

    expect(result).toMatchObject({
      type: 'LOGIN_AUTH_SUCCESS',
    });
  });

  it('render actions loginToAuthFailure', () => {
    const result = loginToAuthFailure();

    expect(result).toMatchObject({ type: 'LOGIN_AUTH_FAILURE' });
  });

  it('render actions logoutUser', () => {
    const result = logoutUser();

    expect(result).toMatchObject({ type: 'LOGOUT_USER' });
  });
});
