import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

function Room({ user, socket, joinRoom, room }) {
  const history = useHistory();
  const { room_id } = useParams();

  useEffect(() => {
    if (!socket) return;

    if (!user) {
      history.push('/');
    }

    socket.emit('join room', { room_id, user });
    socket.on('success join room', ({ room }) => {
      /* room 객체 구조
          {
            roomName: '방제목은 이걸로 해주세요',
            maxNum: 5,
            memberList: [ { id : "5fae43b50e45151660ac462e", name : "Carrot Cold" } ],
            isLocked: false
          }
      */
      joinRoom(room);
    });
  }, [socket]);

  return (
    <div>
      <h1>Room</h1>
      {room && (
        <>
          <p>{room.id}</p>
          <p>{room.roomName}</p>
          <p>{room.maxNum}</p>
        </>
      )}
    </div>
  );
}

export default Room;

Room.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.object,
  room: PropTypes.object,
  joinRoom: PropTypes.func.isRequired,
};
