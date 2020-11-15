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

export const addFrinedRequestList = list => ({
  type: types.ADD_FRIEND_REQUEST_LIST,
  payload: { friendRequestList: list },
});

export const openSocket = socket => ({
  type: types.OPEN_SOCKET,
  payload: { socket },
});

export const closeSocket = () => ({
  type: types.CLOSE_SOCKET,
});
