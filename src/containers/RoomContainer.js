import { connect } from 'react-redux';

import Room from '../components/Room';
import * as roomAction from '../actions/roomAction';

const mapStateToProps = state => ({
  user: state.user,
  socket: state.socket,
  room: state.room,
});

const mapDispatchToProps = dispatch => {
  return {
    joinRoom(room) {
      dispatch(roomAction.joinRoom(room));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
