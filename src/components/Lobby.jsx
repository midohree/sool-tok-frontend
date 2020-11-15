import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import ModalPortal from './ModalPortal';
import Modal from './Modal';
import CreateRoomForm from './CreateRoomForm';
import JoinRoomForm from './JoinRoomForm';

function Lobby({ user, openSocket, closeSocket, createRoom }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setmodalContent] = useState(null);

  useEffect(() => {
    openSocket(user.name);
    return () => closeSocket();
  }, []);

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
              onSubmit={roomData => createRoom(user.id, roomData)}
            />,
          )
        }
        text='+ 테이블 잡기'
      />
      <Button
        onClick={() => openModal(<JoinRoomForm onSubmit={console.log} />)}
        text='URL로 참여하기'
      />
      { isModalOpen && (
        <ModalPortal>
          <Modal closeModal={closeModal}>{modalContent}</Modal>
        </ModalPortal>
      )}
    </div>
  );
}

export default Lobby;

Lobby.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.object,
  openSocket: PropTypes.func.isRequired,
  closeSocket: PropTypes.func.isRequired,
  createRoom: PropTypes.func.isRequired,
};
