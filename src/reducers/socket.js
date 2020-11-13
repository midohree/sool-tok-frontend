import { OPEN_SOCKET, CLOSE_SOCKET } from '../constants/actionTypes';

const socketReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_SOCKET:
      return { ...action.payload.socket };
    case CLOSE_SOCKET:
      return null;
    default:
      return state;
  }
};

export default socketReducer;
