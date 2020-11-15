import * as types from '../constants/actionTypes';

export const loginUser = user => ({
  type: types.LOGIN_USER,
  payload: { user },
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

export const addFriendList = list => ({
  type: types.ADD_FRIEND_LIST,
  payload: { friendList: list },
});
