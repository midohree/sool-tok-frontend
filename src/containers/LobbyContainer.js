import { connect } from 'react-redux';
import io from 'socket.io-client';

import Lobby from '../components/Lobby';
import { openSocket, closeSocket } from '../actions/actionCreator';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  const socket = io(process.env.REACT_APP_PROXY_URL);

  socket.on('success create room', ({ room }) => {
    console.log('success create room :', room);
    // TODO: Handle Room State
    /* room 객체 구조
        {
          roomName: '방제목은 이걸로 해주세요',
          maxNum: 5,
          memberList: [ { id : "5fae43b50e45151660ac462e", name : "Carrot Cold" } ],
          isLocked: false
        }
    */
  });

  return {
    openSocket(user) {
      const { name } = user;
      socket.emit('new user', { name });
      dispatch(openSocket(socket));
    },
    closeSocket() {
      socket.disconnect();
      dispatch(closeSocket());
    },
    createRoom(user, roomData) {
      const { id, name } = user;
      socket.emit('create room', {
        user: { id, name },
        roomData,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
