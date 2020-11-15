import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function CreateRoomForm({ onSubmit }) {
  const [inputs, setInputs] = useState({
    roomName: '',
    maxNum: '',
  });

  const submitRoomData = ev => {
    ev.preventDefault();
    const { roomName, maxNum } = inputs;
    onSubmit({ roomName, maxNum: Number(maxNum) });
  };

  const handleInputChange = ev => {
    const { name, value } = ev.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={submitRoomData}>
      <input
        type='text'
        name='roomName'
        value={inputs.roomName}
        onChange={handleInputChange}
        required
      />
      <input
        type='text'
        name='maxNum'
        value={inputs.maxNum}
        onChange={handleInputChange}
        required
      />
      <Button onClick={submitRoomData} text='테이블 잡기' />
    </form>
  );
}

export default CreateRoomForm;

CreateRoomForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
