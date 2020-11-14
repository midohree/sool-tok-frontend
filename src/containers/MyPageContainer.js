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

      // FOR TEST
      friendList.push({ id: '1asdad', name: '김도희', photoUrl: 'https://avatars3.githubusercontent.com/u/60248910?s=400&u=d906c83a0156628a86a758b717b50a2c2b417046&v=4', isOnline: true });
      friendList.push({ id: 'asbkasboa', name: '나소인', photoUrl: 'https://avatars0.githubusercontent.com/u/60972250?s=460&v=4', isOnline: false });

      dispatch(addFriendList(friendList));
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
