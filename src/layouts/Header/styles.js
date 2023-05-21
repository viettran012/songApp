import {StyleSheet} from 'react-native';
import {range, color, STATUS_BAR_HEIGHT} from '../../assets/interfaces';

const styles = StyleSheet.create({
  headerWrapper: {
    height: range.headerHeight + STATUS_BAR_HEIGHT,
    // backgroundColor: color.gray,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  headerBackWrapper: {
    height: range.headerHeight + STATUS_BAR_HEIGHT,
    backgroundColor: color.headerGray,
    paddingTop: STATUS_BAR_HEIGHT,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerIcon: {
    height: 50,
    width: 50,
    // backgroundColor: color.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeaderBackWrapper: {
    paddingHorizontal: 65,
    flex: 1,
  },
  titleHeaderText: {
    color: color.mainText,
    fontSize: 16,
  },
});

export default styles;
