import MyPage from '../screen/MainScreen/MyPage';
import Discover from '../screen/MainScreen/Discover';
import Player from '../screen/MainScreen/Player';
import {View, Image, StyleSheet} from 'react-native';
const discoverIcon = require('../assets/imgIcon/tabbarIcon_discover.png');
const discoverIconActive = require('../assets/imgIcon/tabbarIcon_discover_active.png');
const myPageIcon = require('../assets/imgIcon/tabbarIcon_mypage.png');
const myPageIconActive = require('../assets/imgIcon/tabbarIcon_mypage_active.png');

const styles = StyleSheet.create({
  iconStyle: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
  },
  iconWrapper: {
    height: 33,
    width: 33,
  },
});

const TABBAR_ITEMS = [
  {
    name: 'Discover',
    component: Discover,
    label: 'Khám phá',
    Icon: (
      <View style={styles.iconWrapper}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={discoverIcon}></Image>
      </View>
    ),
    FocusIcon: (
      <View style={styles.iconWrapper}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={discoverIconActive}></Image>
      </View>
    ),
  },
  {
    name: 'Player',
    component: Player,
    label: 'Player',
    Icon: <View></View>,
    FocusIcon: <View></View>,
  },
  {
    name: 'MyPage',
    component: MyPage,
    label: 'Của tui',
    Icon: (
      <View style={styles.iconWrapper}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={myPageIcon}></Image>
      </View>
    ),
    FocusIcon: (
      <View style={styles.iconWrapper}>
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={myPageIconActive}></Image>
      </View>
    ),
  },
];

export {TABBAR_ITEMS};
