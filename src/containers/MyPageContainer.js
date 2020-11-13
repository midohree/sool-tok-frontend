import { connect } from 'react-redux';

import MyPage from '../components/MyPage';
import { userService } from '../utils/api';
import { addFriendList } from '../actions/actionCreator';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  async onLoad(user) {
    try {
      const token = localStorage.getItem('jwt-token');
      const friendList = await userService.getFriendList(user.id, token);
      dispatch(addFriendList(friendList));
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
