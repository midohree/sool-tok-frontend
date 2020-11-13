import { LOGIN_USER } from '../constants/actionTypes';

const userReducer = (state = null, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...action.payload.user };
    default:
      return state;
  }
};

export default userReducer;
