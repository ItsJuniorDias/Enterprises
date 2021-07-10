import { IShow, ActionTypes, IHeaders } from './types';

export function requestHeadersShow(headers: IShow) {
  return {
    type: ActionTypes.requestHeaders,
    payload: {
      headers,
    },
  };
}

export function resetState() {
  return {
    type: ActionTypes.resetState,
    enterprise: {},
  };
}

export function requestShow(headers: IHeaders, id: IShow) {
  return {
    type: ActionTypes.requestShow,
    payload: {
      id,
      headers,
    },
  };
}

export function successShow(data: IShow) {
  return {
    type: ActionTypes.successShow,
    payload: {
      data,
    },
  };
}

export function failureShow() {
  return {
    type: ActionTypes.failureShow,
    payload: {},
  };
}
