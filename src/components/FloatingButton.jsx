import React from 'react';
import PropTypes from 'prop-types';

function FloatingButton({ onClick }) {
  return <button onClick={onClick}>🤮</button>;
}

export default FloatingButton;

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
