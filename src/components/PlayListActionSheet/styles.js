import {StyleSheet} from 'react-native';
import {border, color} from '../../assets/interfaces';

const styles = StyleSheet.create({
  actionItemWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  iconWrapper: {
    width: 35,
    height: '100%',
    alignItems: 'center',
    marginRight: 15,
  },
  actionTitle: {
    fontSize: 15,
  },
  actionTitleWrapper: {},
  playlistThumbWrappper: {
    height: 55,
    width: 55,
    marginRight: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  playlistItemW: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    ...border.bottom,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playlistTitleText: {
    marginBottom: 5,
    fontSize: 17,
  },
});

export default styles;
