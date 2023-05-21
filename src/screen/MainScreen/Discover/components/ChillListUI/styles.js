import {StyleSheet} from 'react-native';
import {color} from '../../../../../assets/interfaces';

const styles = StyleSheet.create({
  playListWrapper: {
    marginVertical: 5,
    marginHorizontal: -20,
  },
  playListTitle: {
    fontSize: 21,
    color: color.black,
    marginLeft: 20,
  },
  playListTitleWrapper: {
    paddingVertical: 7,
    marginBottom: 5,
  },

  //scroll view
  //   playlistScrollView: {
  //     paddingHorizontal: -20,
  //   },

  //item
  playListItemWraper: {
    height: 85,
    width: 170,
    // backgroundColor: color.blue,
    marginRight: 12,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },

  playListDesWrapper: {
    width: 170,
    marginVertical: 7,
  },
  titleText: {
    fontSize: 16,
    color: color.white,
    paddingHorizontal: 5,
  },
  titleTextSinger: {
    fontSize: 12,
    paddingHorizontal: 5,
    color: color.white,
  },
});

export default styles;
