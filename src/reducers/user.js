import { LOGIN_USER, ADD_FRIEND_LIST } from '../constants/actionTypes';

const userReducer = (state = null, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...action.payload.user };
    case ADD_FRIEND_LIST:
      return { ...state, friendList: [...action.payload.friendList] };
    default:
      return state;
  }
};

export default userReducer;
