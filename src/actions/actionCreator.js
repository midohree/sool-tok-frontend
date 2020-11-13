import * as types from '../constants/actionTypes';

export const loginUser = user => ({ type: types.LOGIN_USER, payload: { user } });
