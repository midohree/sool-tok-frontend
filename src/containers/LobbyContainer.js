import { connect } from 'react-redux';
import io from 'socket.io-client';

import Lobby from '../components/Lobby';
import { openSocket, closeSocket } from '../actions/actionCreator';

const mapStateToProps = state => ({ socket: state.socket });

const mapDispatchToProps = dispatch => {
  return {
    openSocket() {
      const socket = io(process.env.REACT_APP_PROXY_URL);
      dispatch(openSocket(socket));
    },
    closeSocket(socket) {
      socket.disconnect();
      dispatch(closeSocket());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
