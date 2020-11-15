import { LOGIN_USER, LOGOUT_USER, ADD_FRIEND_LIST } from '../constants/actionTypes';

const userReducer = (state = null, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...action.payload.user };
    case ADD_FRIEND_LIST:
      return { ...state, friendList: [...action.payload.friendList] };
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
