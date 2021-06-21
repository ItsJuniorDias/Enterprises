import { ActionTypes, IEnterprise } from './types';

export function getEnterpriseHeaders(enterprises: IEnterprise) {
  return {
    type: ActionTypes.getEnterpriseSuccess,
    payload: {
      enterprises,
    },
  };
}

export function getEnterpriseRequest(headers: IEnterprise) {
  return {
    type: ActionTypes.getEnterpriseRequest,
    payload: {
      headers,
    },
  };
}

export function getEnterpriseSuccess(data: IEnterprise) {
  return {
    type: ActionTypes.getEnterpriseSuccess,
    payload: {
      data,
    },
  };
}

export function getEnterpriseFailure() {
  return {
    type: ActionTypes.getEnterpriseFailure,
    payload: {},
  };
}
