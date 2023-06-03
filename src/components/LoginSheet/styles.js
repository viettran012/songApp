import {StyleSheet} from 'react-native';
import {color} from '../../assets/interfaces';

const styles = StyleSheet.create({
  sheetContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  bgStyle: {
    borderRadius: 10,
  },
  loginWrapper: {
    height: '100%',
    paddingVertical: 20,
  },

  //content

  logoBf: {
    height: 170,
    width: 120,
  },
  logoWrapper: {
    alignItems: 'center',
  },

  loginMethodButton: {
    paddingVertical: 7,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 50,
    marginVertical: 7,
  },
  btnLoginTextWrapper: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  loginActionWrapper: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  btnLoginText: {},
  methodIcon: {
    height: 30,
    width: 30,
  },
  texConfirmWrapperL1: {
    alignItems: 'center',
    paddingVertical: 7,
    justifyContent: 'center',
  },
  texConfirmWrapper: {
    width: '80%',
  },
  confirmText: {
    textAlign: 'center',
    color: color.blackL2,
    fontSize: 12,
  },
});

export default styles;
