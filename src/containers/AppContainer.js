import { connect } from 'react-redux';

import App from '../components/App';
import { userService } from '../utils/api';
import { loginUser } from '../actions/actionCreator';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  async onLoad() {
    const token = localStorage.getItem('jwt-token');

    if (token) {
      const { user } = await userService.tokenLogin(token);
      if (user) dispatch(loginUser(user));
    }
  },
  async onLogin() {
    try {
      const { user, token } = await userService.googleLogin();
      localStorage.setItem('jwt-token', token);
      dispatch(loginUser(user));
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
