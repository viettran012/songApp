import {getStatusBarHeight} from 'react-native-status-bar-height';
import {StatusBar, View, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IOS_HEIGHT = getStatusBarHeight() || 20;
const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? IOS_HEIGHT : StatusBar.currentHeight;

const color = {
  mainTextL3: '#9e9ca6',
  mainTextL2: '#818086',
  mainTextL1: '#5b5b6c',
  mainText: '#32323b',

  transparent: '#00000000',
  transparentWhite: 'rgba(255, 255, 255, 0.3)',
  transparentBlack: 'rgba(0, 0, 0, 0.1)',
  transparentBlackL: 'rgba(0, 0, 0, 0.5)',

  gray: '#f6f6f6',
  grayE: '#eeeeee',

  black: '#000000',

  white: '#ffffff',
  whiteL1: '#cacaca',

  iconColor: '#818086',

  purple: '#6626f9',
  turquoise: '#43bcff',
  blue: '#5865fc',

  gray600: '#dddddd',
  red: '#f34359',
  green: '#00d6ba',

  headerGray: '#f5f5f5',
};

const gradientGroup = {
  mainL: [color.purple, color.turquoise],
  main: ['#cbdbff', '#f4def9', '#ffffff', '#ffffff', '#ffffff'],
  discover: function (x = '99') {
    return [`#9dbbff${x}`, `#edc0f7${x}`, '#ffffff', '#ffffff', '#ffffff'];
  },
  blackToWhite: ['#30303000', '#ffffff'],
  blackWhiteBlack: ['#00000099', '#00000000', '#000000cc'],
};

const range = {
  tabbarHeight: 65,
  headerHeight: 53,
};

export {
  range,
  color,
  STATUS_BAR_HEIGHT,
  gradientGroup,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
