import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Lobby from './Lobby';
import Login from './Login';

function App({ onLogin, user }) {
  return (
    <Switch>
      <Route path='/'>
        { user ? <Lobby /> : <Login onLogin={onLogin} /> }
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
  user: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
  ]),
};
