import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Login({ onLogin }) {
  return (
    <div>
      <h1>술톡</h1>
      <p>친구와 함께하는 술술TALK🍺</p>
      <Button onClick={onLogin} text='구글 로그인' />
    </div>
  );
}

export default Login;

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
