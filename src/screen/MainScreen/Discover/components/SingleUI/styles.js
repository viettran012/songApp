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
  songAreaWrapper: {
    marginRight: 12,
    width: 240,
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
    borderRadius: 8,
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
    marginLeft: 12,
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
    marginBottom: 12,
  },
});

export default styles;
