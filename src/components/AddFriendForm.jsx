import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddFriendForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const [hasError, setHasError] = useState('');

  const submitRoomData = ev => {
    ev.preventDefault();

    // Email validation
    onSubmit(input);
  };

  const handleInputChange = ev => {
    const { value } = ev.target;
    setInput(value);
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h2>Form</h2>
      <form onSubmit={submitRoomData}>
        <input
          type='email'
          name='email'
          value={input}
          onChange={handleInputChange}
          required
        />
        <input type='submit' value='친구 추가' />
      </form>
    </div>
  );
}

export default AddFriendForm;

AddFriendForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
