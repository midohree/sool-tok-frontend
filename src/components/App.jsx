import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import LobbyContainer from '../containers/LobbyContainer';
import Login from './Login';

function App({ onLogin, onLoad, user }) {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Switch>
      <Route path='/'>
        {user ? <LobbyContainer /> : <Login onLogin={onLogin} />}
      </Route>
      <Route path='/room/:id'>
      </Route>
      <Redirect to='/' />
    </Switch>
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
