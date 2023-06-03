import {setUserInFo, setUserInitData} from '../redux/actions/user';
import store from '../redux/store';
import {initData} from '../services/userServices';
import storage from './storage';

async function prePageData() {
  const userInfo = await storage.getItem('userInfo');
  if (userInfo?.user?.uid) {
    store?.dispatch(setUserInFo(userInfo));
  }
}

async function preUserData() {
  const userInfo = await storage.getItem('userInfo');
  const isLogin = store?.getState()?.user?.isLogin;

  if (userInfo?.user?.uid || isLogin) {
    const fb = await initData();
    if (fb?.result == 1) {
      store?.dispatch(setUserInitData(fb?.data));
    }
  }
}

export default prePageData;
export {preUserData};
