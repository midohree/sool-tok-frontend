import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  onLogin() {
    console.log('Login!');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
