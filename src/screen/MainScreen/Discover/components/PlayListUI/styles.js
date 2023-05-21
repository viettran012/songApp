import {StyleSheet} from 'react-native';
import {color} from '../../../../../assets/interfaces';

const styles = StyleSheet.create({
  playListWrapper: {
    // marginVertical: 5,
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
    height: 140,
    width: 140,
    // backgroundColor: color.blue,
    marginRight: 12,
    borderRadius: 10,
  },

  playListDesWrapper: {
    width: 140,
    marginVertical: 7,
  },
  titleText: {
    fontSize: 13,
    color: color.mainText,
  },
  titleTextSinger: {
    fontSize: 12,
    color: color.mainTextL2,
  },
});

export default styles;
