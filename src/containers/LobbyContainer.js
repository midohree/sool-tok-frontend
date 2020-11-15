import { connect } from 'react-redux';

import Lobby from '../components/Lobby';
import * as roomAction from '../actions/roomAction';

const mapStateToProps = state => ({
  user: state.user,
  socket: state.socket,
  room: state.room,
});

const mapDispatchToProps = dispatch => {
  return {
    createRoom(room) {
      dispatch(roomAction.createRoom(room));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
