import {StyleSheet} from 'react-native';
import {color} from '../../../../../assets/interfaces';

const styles = StyleSheet.create({
  playListWrapper: {
    marginVertical: 5,
    marginHorizontal: -20,
    marginBottom: 10,
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
    borderRadius: 8,
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

  //chart

  chartWrapper: {
    width: 290,
    backgroundColor: color.grayE,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 17,
  },
  titleChart: {
    fontSize: 17,
    color: color.black,
  },

  //song
  songItemWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  thumbnailSongWrapper: {
    height: 45,
    width: 45,
    borderRadius: 4,
    overflow: 'hidden',
  },
  thumbnailSong: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
  },
  rankWrapper: {
    height: 45,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSongWrapper: {
    height: 45,
    justifyContent: 'center',
    flex: 1,
  },
  singerText: {
    fontSize: 12,
    marginTop: 3,
    color: color.mainTextL1,
  },
  rankText: {
    fontSize: 15,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 15,
  },
  rankNameTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default styles;
