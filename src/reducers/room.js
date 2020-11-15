import {
  CREATE_ROOM,
  JOIN_ROOM,
  LEAVE_ROOM,
  ADD_MEMBER,
  DELETE_MEMBER,
} from '../constants/actionTypes';

const roomReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return { ...action.payload.room };
    case JOIN_ROOM:
      return { ...action.payload.room };
    case ADD_MEMBER:
      return {
        ...state,
        memberList: [...state.memberList, action.payload.user],
      };
    case DELETE_MEMBER:
      return {
        ...state,
        memberList: state.memberList.filter(
          member => member.id !== action.payload.user.id,
        ),
      };
    case LEAVE_ROOM:
      return null;
    default:
      return state;
  }
};

export default roomReducer;
