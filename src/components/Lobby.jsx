import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Modal from './Modal';
import CreateRoomForm from './CreateRoomForm';

function Lobby({ socket, openSocket, closeSocket }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setmodalContent] = useState(null);

  useEffect(() => {
    openSocket();
    return () => closeSocket(socket);
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
        onClick={() => openModal(<CreateRoomForm onSubmit={console.log} />)}
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
  socket: PropTypes.object,
  openSocket: PropTypes.func.isRequired,
  closeSocket: PropTypes.func.isRequired,
};
