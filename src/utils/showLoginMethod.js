import store from '../redux/store';
import {showLoginSheet} from '../redux/actions/appState';

function showLoginMethod() {
  const isLogin = store?.getState()?.user?.isLogin;
  if (!isLogin) {
    store.dispatch(showLoginSheet(Math.random()));
  }
}

export default showLoginMethod;
