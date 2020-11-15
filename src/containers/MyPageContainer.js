import { connect } from 'react-redux';

import MyPage from '../components/MyPage';
import { userService } from '../utils/api';
import { addFriendList, addFrinedRequestList, logoutUser } from '../actions/actionCreator';

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
  async onLoadRequestList(user) {
    const token = localStorage.getItem('jwt-token');
    const RequestFriendList = await userService.getFriendRequestList(user._id, token);
    dispatch(addFrinedRequestList(RequestFriendList));
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
  async onSubmit() {
    try {
      console.log('onSubmit');
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
