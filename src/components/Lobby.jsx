import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Lobby({ openSocket, closeSocket }) {
  useEffect(() => {
    openSocket();
    return () => closeSocket();
  }, []);

  return (
    <div>
      <h1>LOBBY</h1>
      <Button onClick={() => console.log('make room')} text='+ 좌석잡기' />
      <Button onClick={() => console.log('join room')} text='URL로 참여하기' />
    </div>
  );
}

export default Lobby;

Lobby.propTypes = {
  openSocket: PropTypes.func.isRequired,
  closeSocket: PropTypes.func.isRequired,
};
