import {View, Image} from 'react-native';
import {IoniconsIcon} from '../../../../assets/icons';
import styles from '../styles';
import {useSelector} from 'react-redux';
import {TextB, TextBB} from '../../../../components/GlobalComponents';
import {color, hardStyle} from '../../../../assets/interfaces';
import Button from '../../../../components/Button';
import {useDispatch} from 'react-redux';
import {showLoginSheet} from '../../../../redux/actions/appState';
import showLoginMethod from '../../../../utils/showLoginMethod';

function UserInfo() {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state?.user?.userInfo);
  const isLogin = useSelector(state => state?.user?.isLogin);

  return (
    <View style={styles.myInfoArea}>
      <View style={styles.infoBasicWrapper}>
        <View style={[isLogin ? styles.avatarWrapperLg : styles.avatarWrapper]}>
          {isLogin ? (
            <Image
              source={{
                uri: userInfo?.user?.photoURL,
              }}
              style={[hardStyle.image]}
            />
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
          {isLogin ? (
            <TextBB style={styles.userNameText}>
              {userInfo?.user?.displayName || 'USER'}
            </TextBB>
          ) : (
            <TextB numLine={2}>Bạn chưa đăng nhập</TextB>
          )}
        </View>
      </View>
      <View style={styles.butonWrapper}>
        {isLogin ? null : (
          <Button
            underlayColor={true}
            onPress={() => {
              showLoginMethod();
            }}
            style={styles.loginBtnWrapper}>
            <TextB style={styles.loginBtnText}>Đăng nhập</TextB>
          </Button>
        )}
      </View>
    </View>
  );
}

export default UserInfo;
