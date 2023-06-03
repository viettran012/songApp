import {StyleSheet} from 'react-native';
import {color} from '../../assets/interfaces';

const styles = StyleSheet.create({
  input: {
    backgroundColor: color.inputBg,
    borderRadius: 4,
    fontFamily: 'Quicksand-SemiBold',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  submitBtn: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: color.blueL,
    borderRadius: 40,
    marginTop: 20,
  },
  submitText: {
    fontSize: 16,
    color: color.white,
  },
});

export default styles;
