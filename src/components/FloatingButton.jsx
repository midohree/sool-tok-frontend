import React from 'react';
import PropTypes from 'prop-types';

function FloatingButton({ onClick, text }) {
  return (<button onClick={onClick}>{text}</button>);
}

export default FloatingButton;

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
