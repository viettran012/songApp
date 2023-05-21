import {StyleSheet} from 'react-native';
import {color} from '../../assets/interfaces';

const styles = StyleSheet.create({
  ui: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    // borderStyle: 'dotted',
    // borderWidth: 1.5,
    // borderRadius: 45,
    // borderColor: color.mainTextL2,
  },

  borderRotate: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderWidth: 1.5,
    borderRadius: 45,
    borderColor: color.mainTextL2,
    position: 'absolute',
  },
  uiWrapper: {
    height: 37,
    width: 37,
    borderRadius: 40,
    overflow: 'hidden',
    // backgroundColor: color.blue,
  },

  songThumbnail: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
    // opacity: 0.5,
  },
  homeText: {
    fontSize: 11,
    color: color.mainTextL2,
    marginTop: 2,
  },
  circularProgress: {
    position: 'absolute',
    zIndex: 999,
    elevation: 999,
  },
});

export default styles;
