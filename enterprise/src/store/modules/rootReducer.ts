import { combineReducers } from 'redux';

import enterprise from './enterprise/reducer';
import auth_user from './auth/reducer';

export default combineReducers({
  auth_user,
  enterprise,
});
