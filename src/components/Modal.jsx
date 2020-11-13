import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Modal({ children, closeModal }) {
  return (
    <div>
      <h1>Modal</h1>
      <Button onClick={closeModal} text='모달닫기' />
      {children}
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func.isRequired,
};
