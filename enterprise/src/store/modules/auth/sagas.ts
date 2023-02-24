/* eslint-disable import/no-extraneous-dependencies */
import { AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  loginToAuthSuccess,
  loginToAuthFailure,
  loginToAuthRequest,
} from './actions';

import {
  getEnterpriseHeaders,
  getEnterpriseRequest,
} from '../enterprise/actions';

import { ActionTypes, IAuthResponse } from './types';
import { requestHeadersShow } from '../show/actions';

type authLoginRequest = ReturnType<typeof loginToAuthRequest>;

function* loginAuthUser({ payload }: authLoginRequest) {
  const { data } = payload;

  try {
    const response: AxiosResponse<IAuthResponse | any> = yield call(
      api.post,
      '/users/auth/sign_in',
      data
    );

    yield put(loginToAuthSuccess(response.data));

    const { uid, client, ...rest } = response.headers;

    const dataHeader = {
      uid,
      client,
      'access-token': rest['access-token'],
    };

    yield put(getEnterpriseRequest(dataHeader));
    yield put(requestHeadersShow(dataHeader));
    // yield put(push('Home'));
  } catch (e) {
    yield put(loginToAuthFailure());

    Alert.alert(
      'Erro na autenticação',
      'Ocorreu um erro ao fazer login, cheque as credenciais'
    );
  }
}

export default all([takeLatest(ActionTypes.loginAuthRequest, loginAuthUser)]);
