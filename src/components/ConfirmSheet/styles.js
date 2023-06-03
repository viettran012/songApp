import {StyleSheet} from 'react-native';
import {border, color} from '../../assets/interfaces';

const styles = StyleSheet.create({
  actionBtn: {
    paddingVertical: 12,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 10,
  },
  textAction: {
    fontSize: 16,
  },
  actionWrapper: {
    paddingHorizontal: 20,
  },
  subTitleText: {
    fontSize: 16,
    color: color.mainTextL2,
    textAlign: 'center',
  },
  subTitleWrapper: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default styles;
