import * as types from '../constants/actionTypes';

export const createRoom = room => ({
  type: types.CREATE_ROOM,
  payload: { room },
});

export const joinRoom = room => ({
  type: types.JOIN_ROOM,
  payload: { room },
});

export const addMember = user => ({
  type: types.ADD_MEMBER,
  payload: { user },
});

export const deleteMember = user => ({
  type: types.DELETE_MEMBER,
  payload: { user },
});

export const leaveRoom = () => ({
  type: types.LEAVE_ROOM,
});
