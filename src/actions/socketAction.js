import * as types from '../constants/actionTypes';

export const openSocket = socket => ({
  type: types.OPEN_SOCKET,
  payload: { socket },
});

export const closeSocket = () => ({
  type: types.CLOSE_SOCKET,
});
