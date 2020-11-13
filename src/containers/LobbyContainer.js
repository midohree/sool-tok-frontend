import { connect } from 'react-redux';
import io from 'socket.io-client';

import Lobby from '../components/Lobby';
import { openSocket, closeSocket } from '../actions/actionCreator';

const mapDispatchToProps = dispatch => {
  const socket = io(process.env.REACT_APP_PROXY_URL);

  return {
    openSocket() {
      socket.on('new socket id', ({ socketId }) => {
        console.log('new socket id : ', socketId);
        dispatch(openSocket(socket));
      });
    },
    closeSocket() {
      socket.disconnect();
      console.log('socket disconnected', socket);
      dispatch(closeSocket());
    },
  };
};

export default connect(null, mapDispatchToProps)(Lobby);
