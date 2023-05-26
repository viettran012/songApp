import {View, Text, Image} from 'react-native';
import DefaultLayout from '../../../layouts/DefaultLayout';
import {useEffect, useState} from 'react';
import styles from './styles';
import {HeaderBack} from '../../../layouts/Header';
import {FeatherIcon, IoniconsIcon} from '../../../assets/icons';
import {color} from '../../../assets/interfaces';
import {TextB, TextBB} from '../../../components/GlobalComponents';
import Button from '../../../components/Button';
import AnalystAction from './components/analytAction';
import {USER_ANALYST_ACTION_ITEMS} from '../../../item/USER_ANALYST_ACTION_ITEMS';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function MyPage() {
  const [isLogin, setIslogin] = useState(false);
  GoogleSignin.configure({
    webClientId:
      '856527882200-477ghrnd0a8tomcn15e6hui07mj6pqqn.apps.googleusercontent.com',
  });
  const signinWidthGooleAsync = async e => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userPromise = auth().signInWithCredential(googleCredential);
    userPromise
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <DefaultLayout
      rightButton={
        <IoniconsIcon
          size={25}
          color={color.mainText}
          name="settings-outline"
        />
      }
      onRightButtonPress={() => {
        console.log('setting');
      }}
      isHeaderOpacity={true}
      gradient={true}
      gradientId={'user'}
      isChangeHeaderOpacity={true}
      header={<HeaderBack title={'Tài khoản'} />}>
      <View style={styles.pageWrapper}>
        <View style={styles.myInfoArea}>
          <View style={styles.infoBasicWrapper}>
            <View style={styles.avatarWrapper}>
              {isLogin ? (
                <Image />
              ) : (
                <View>
                  <IoniconsIcon
                    name="person-outline"
                    size={35}
                    color={color.white}
                  />
                </View>
              )}
            </View>
            <View style={styles.userNameWrapper}>
              <TextB numLine={2}>
                {isLogin ? 'Trần Việt' : 'Bạn chưa đăng nhập'}
              </TextB>
            </View>
          </View>
          <View style={styles.butonWrapper}>
            {isLogin ? null : (
              <Button
                underlayColor={true}
                onPress={() => {
                  // setIslogin(true);
                }}
                style={styles.loginBtnWrapper}>
                <TextB style={styles.loginBtnText}>Đăng nhập</TextB>
              </Button>
            )}
          </View>
        </View>
        <View style={styles.analystArea}>
          <View style={styles.sectionTitleWrapper}>
            <TextBB style={styles.sectionTitle}>Thư viện</TextBB>
          </View>
          <View style={styles.analystActionList}>
            {USER_ANALYST_ACTION_ITEMS.map((item, index) => {
              return <AnalystAction key={index} item={item} />;
            })}
          </View>
        </View>

        <View style={styles.playListArea}>
          <View style={styles.sectionTitleWrapper}>
            <TextBB style={styles.sectionTitle}>PlayList của tui</TextBB>
          </View>
          <View>
            <Button onPress={signinWidthGooleAsync}>
              <View>
                <Text>Sign in width Google</Text>
              </View>
            </Button>
          </View>
        </View>
        <View style={styles.settingArea}></View>
      </View>
    </DefaultLayout>
  );
}

export default MyPage;
