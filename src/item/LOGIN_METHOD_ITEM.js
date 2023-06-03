import {color} from '../assets/interfaces';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import storage from '../utils/storage';
import store from '../redux/store';
import {setLoaderMaskShow, showLoginSheet} from '../redux/actions/appState';
import showToast from '../utils/showToast';
import {setUserInFo} from '../redux/actions/user';
import {preUserData} from '../utils/prepareData';

const LOGIN_METHOD_ITEM = [
  {
    title: 'Tiếp tục với Facebook',
    iconType: 'png',
    iconSource: require('../assets/imgIcon/facebook_icon.png'),
    callback: function () {},
    backGroundColor: color.blackL1,
    textColor: color.white,
  },

  {
    title: 'Tiếp tục với Google',
    iconType: 'png',
    iconSource: require('../assets/imgIcon/google_icon.png'),
    callback: async function () {
      GoogleSignin.configure({
        webClientId:
          '856527882200-477ghrnd0a8tomcn15e6hui07mj6pqqn.apps.googleusercontent.com',
      });

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      store.dispatch(
        setLoaderMaskShow({
          isShow: true,
          content: 'Đang đăng nhập với Google',
        }),
      );
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userPromise = auth().signInWithCredential(googleCredential);
      userPromise
        .then(async user => {
          if (user) {
            const isSave = await storage.setItem('userInfo', user);
            store.dispatch(setUserInFo(user));
            store.dispatch(showLoginSheet(false));
            await preUserData();
            store.dispatch(setLoaderMaskShow(false));
            showToast({content: 'Đăng nhập thành công', duration: 3000});
          } else {
            store.dispatch(setLoaderMaskShow(false));
            showToast({content: 'Đăng nhập thất bại', duration: 3000});
          }
        })
        .catch(error => {
          console.log('login false');
          console.log(error);
          store.dispatch(setLoaderMaskShow(false));
        });
    },
    backGroundColor: color.blackL1,
    textColor: color.white,
  },
];

export {LOGIN_METHOD_ITEM};
