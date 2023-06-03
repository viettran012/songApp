import store from '../redux/store';
import showLoginMethod from './showLoginMethod';

function loginCallback(callback) {
  const isLogin = store?.getState()?.user?.isLogin;
  const userInfo = store?.getState()?.user?.userInfo;
  if (isLogin) {
    if (callback) {
      callback(userInfo);
    }
  } else {
    showLoginMethod();
  }
}

export default loginCallback;
