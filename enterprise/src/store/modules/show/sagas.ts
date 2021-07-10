/* eslint-disable require-yield */
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { IShow, ActionTypes } from './types';

import {
  requestShow,
  successShow,
  failureShow,
  requestHeadersShow,
} from './actions';

type GetShowRequest = ReturnType<typeof requestShow>;

function* getShow({ payload }: GetShowRequest) {
  const { id, headers } = payload;

  console.log(payload, 'Payload');

  try {
    const response: AxiosResponse<IShow | any> = yield call(
      api.get,
      `/enterprises/${id}`,
      {
        headers,
      },
    );

    console.log(response, 'Response');

    yield put(successShow(response.data));
  } catch (e) {
    yield put(failureShow());
  }
}

export default all([takeLatest(ActionTypes.requestShow, getShow)]);
