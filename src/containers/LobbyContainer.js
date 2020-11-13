import { connect } from 'react-redux';
import io from 'socket.io-client';

import Lobby from '../components/Lobby';
import { openSocket, closeSocket } from '../actions/actionCreator';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  const socket = io(process.env.REACT_APP_PROXY_URL);

  socket.on('success create room', ({ newRoom }) => {
    // TODO: Handle Room State
    console.log('success create room', newRoom);
  });

  return {
    openSocket(userId) {
      socket.emit('new user', { userId });
      dispatch(openSocket(userId, socket));
    },
    closeSocket() {
      socket.disconnect();
      dispatch(closeSocket());
    },
    createRoom(userId, roomData) {
      socket.emit('create room', { userId, roomData });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
