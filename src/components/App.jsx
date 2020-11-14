import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import FloatingButton from './FloatingButton';
import MyPageContainer from '../containers/MyPageContainer';
import LobbyContainer from '../containers/LobbyContainer';
import Login from './Login';

function App({ onLogin, onLoad, user }) {
  const [isOpenedMyPage, setOpenMyPage] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  // TODO: 임시 처리 - 로그아웃 하고 새로고침 하지 않은 상태에서 로그인하면 마이페이지는 항상 꺼져 있게 유지 (확인 필요)
  useEffect(() => {
    if (!user) {
      setOpenMyPage(false);
    }
  }, [user]);

  return (
    <>
      { user && isOpenedMyPage && <MyPageContainer /> }
      { user && <FloatingButton onClick={() => { setOpenMyPage(!isOpenedMyPage); }} text='나' />}
      <Switch>
        <Route path='/'>
          { user ? <LobbyContainer /> : <Login onLogin={onLogin} /> }
        </Route>
        <Route path='/room/:id'>
        </Route>
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;

App.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
  ]),
};
