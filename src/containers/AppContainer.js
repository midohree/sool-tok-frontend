import { connect } from 'react-redux';

import App from '../components/App';
import { userService } from '../utils/api';
import { loginUser } from '../actions/actionCreator';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  async onLogin() {
    try {
      const { user, token } = await userService.login();
      localStorage.setItem('jwt-token', token);
      dispatch(loginUser(user));
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
