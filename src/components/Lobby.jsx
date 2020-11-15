import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './Button';
import Modal from './Modal';
import CreateRoomForm from './CreateRoomForm';

function Lobby({ user, socket, createRoom }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setmodalContent] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (!socket) return;

    socket.on('success create room', ({ room }) => {
      console.log('success create room :', room);
      createRoom(room);
      history.push(`/rooms/${room.id}`);
    });
  }, [socket]);

  const openModal = element => {
    setmodalContent(element);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>LOBBY</h1>
      <Button
        onClick={() =>
          openModal(
            <CreateRoomForm
              onSubmit={roomData =>
                socket.emit('create room', { user, roomData })
              }
            />,
          )
        }
        text='+ 테이블 잡기'
      />
      <Button
        onClick={() => openModal(<CreateRoomForm onSubmit={console.log} />)}
        text='URL로 참여하기'
      />
      {isModalOpen && <Modal closeModal={closeModal}>{modalContent}</Modal>}
    </div>
  );
}

export default Lobby;

Lobby.propTypes = {
  user: PropTypes.object,
  room: PropTypes.object,
  socket: PropTypes.object,
  createRoom: PropTypes.func.isRequired,
};
