import firebase from './firebase';
import axios from 'axios';

// Test
// axios.defaults.baseURL = process.env.REACT_APP_PROXY_URL;
axios.defaults.baseURL = 'http://192.168.0.53:8080';

const googleLogin = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const { user } = await firebase.auth().signInWithPopup(provider);
    const userInfo = {
      email: user.email,
      name: user.displayName,
      photoUrl: user.photoURL,
    };

    const { data } = await axios.post('/users/login/google', userInfo);
    return { user: data.user, token: data.token };
  } catch (err) {
    console.error(err);
  }
};

const tokenLogin = async token => {
  try {
    const { data } = await axios.post('/users/login/token', { token });
    if (data.result === 'error') throw new Error(data);

    return { user: data.user };
  } catch (err) {
    console.error(err);
    return;
  }
};

const getFriendList = async (id, token) => {
  try {
    const { data } = await axios.get(`/users/${id}/friends`, {
      headers: {
        'jwt-token': token,
      },
    });
    if (data.result === 'error') throw new Error(data);
    return data.friendList;
  } catch (err) {
    console.error(err);
  }
};

const userService = { googleLogin, tokenLogin, getFriendList };

export { userService };
