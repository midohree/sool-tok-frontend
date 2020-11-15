import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


function FriendCell({ onSubmit, name, photoUrl, isOnline, isRequest }) {
  return (
    <>
      <div style={{ display: 'flex', backgroundColor: isOnline ? 'lightgreen' : 'salmon' }}>
        <img src={photoUrl} style={{ width: '80px', height: '80px' }} />
        <p>{name}</p>
        {
          isRequest &&
          <div style={{ backgroundColor: 'lightpink' }}>
            <Button onClick={() => { onSubmit(); }} text='수락' />
            <Button onClick={() => { onSubmit(); }} text='거절' />
          </div>
        }
      </div>
    </>
  );
}

export default FriendCell;

FriendCell.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  isRequest: PropTypes.bool.isRequired,
};
