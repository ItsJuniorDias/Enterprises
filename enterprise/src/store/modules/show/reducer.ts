import produce from 'immer';
import { Reducer } from 'react';
import { IShowState, ActionTypes } from './types';

const INITIAL_STATE: IShowState = {
  show: {},
  headers: {},
};

const show: Reducer<IShowState> = (state = INITIAL_STATE, action) => {
  console.log(action, 'Action');
  console.log(state, 'State');

  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.successShow: {
        const { data } = action.payload;

        return {
          ...draft,
          ...data,
        };
      }
      case ActionTypes.requestHeaders: {
        const { headers } = action.payload;

        return {
          ...headers,
        };
      }
      case ActionTypes.resetState: {
        const { enterprise } = action;

        return {
          ...draft,
          enterprise,
        };
      }
      case ActionTypes.failureShow: {
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default show;
