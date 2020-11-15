import React from 'react';
import PropTypes from 'prop-types';


function FriendCell({ name, photoUrl, isOnline }) {
  return (
    <div style={{ display: 'flex', backgroundColor: isOnline ? 'lightgreen' : 'salmon' }}>
      <img src={photoUrl} style={{ width: '80px', height: '80px' }} />
      <p>{name}</p>
    </div>
  );
}

export default FriendCell;

FriendCell.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
