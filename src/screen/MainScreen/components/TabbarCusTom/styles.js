import {StyleSheet} from 'react-native';
import {range, color} from '../../../../assets/interfaces';

const styles = StyleSheet.create({
  optionWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabWrapper: {
    flexDirection: 'row',
    height: range.tabbarHeight,
    bottom: 0,
    left: 0,
    right: 0,
  },
  optionLabel: {
    fontSize: 11,
    marginTop: -2,
    color: color.mainTextL2,
  },
  actionWrapperIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btnActionWrapper: {
    height: 45,
    width: 45,
    // backgroundColor: color.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2,
  },
});

export default styles;
