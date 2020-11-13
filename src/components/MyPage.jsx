import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function MyPage({ onLoad, user }) {

  useEffect(() => {
    onLoad(user);
  }, []);

  return (
    <div style={{ backgroundColor: 'lightGray' }}>
      마이 페이지
      <Button onClick={() => {}} text='로그아웃' />
    </div>
  );
}

export default MyPage;

MyPage.propTypes = {
  onLoad: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
  ]),
};
