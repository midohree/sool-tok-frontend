import firebase from './firebase';
import axios from 'axios';

// Test
// axios.defaults.baseURL = process.env.REACT_APP_PROXY_URL;
axios.defaults.baseURL = 'http://192.168.0.53:8080';

const login = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const { user } = await firebase.auth().signInWithPopup(provider);
    const userInfo = {
      email: user.email,
      name: user.displayName,
      photoUrl: user.photoURL,
    };

    const { data } = await axios.post('/users/login', userInfo);
    return { user: data.user, token: data.token };
  } catch (err) {
    console.error(err);
  }
};

const userService = { login };

export { userService };
