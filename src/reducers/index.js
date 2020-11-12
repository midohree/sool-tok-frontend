import { combineReducers } from 'redux';

import userReducer from './user';
import roomReducer from './room';
import socketReducer from './socket';

export default combineReducers({
  user: userReducer,
  socket: socketReducer,
  room: roomReducer,
});
