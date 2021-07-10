import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import enterprise from './enterprise/sagas';
import show from './show/sagas';

export default function* rootSaga() {
  return yield all([auth, enterprise, show]);
}
