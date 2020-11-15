import { connect } from 'react-redux';

import MyPage from '../components/MyPage';
import { userService } from '../utils/api';
import { addFriendList, logoutUser } from '../actions/actionCreator';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  async onLoad(user) {
    try {
      const token = localStorage.getItem('jwt-token');
      const friendList = await userService.getFriendList(user._id, token);

      dispatch(addFriendList(friendList));
    } catch (err) {
      console.error(err);
    }
  },
  async onLogout(user) {
    try {
      const token = localStorage.getItem('jwt-token');
      await userService.logout(user._id, token);

      dispatch(logoutUser());
      localStorage.removeItem('jwt-token');
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
