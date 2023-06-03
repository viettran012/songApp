import {StyleSheet} from 'react-native';
import {color} from '../../assets/interfaces';

const styles = StyleSheet.create({
  screenWrapper: {
    minHeight: '100%',
    // backgroundColor: color.green,
  },
  topImgBgWrapper: {
    width: '100%',
  },
  maskThumb: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  playListInfoArea: {
    paddingHorizontal: 20,
  },
  thumbnailArea: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  thumbnailWrapper: {
    height: 200,
    width: 200,
  },
  thumbnailImg: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 10,
  },
  playListTitleText: {
    fontSize: 23,
  },
  playListSingle: {
    paddingVertical: 10,
    // marginTop: 7,
  },
  playListToltal: {
    paddingBottom: 20,
    color: color.mainTextL1,
    fontSize: 13,
    paddingTop: 20,
  },

  statisticalWrapper: {
    position: 'relative',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 12,
  },
  statisticalNumText: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: 12,
    color: color.mainTextL2,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  playAllBtn: {
    height: 40,
    flexDirection: 'row',
    borderRadius: 40,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playAllBtnText: {
    color: color.white,
  },
  statisticalArea: {
    flexDirection: 'row',
  },

  //song are
  songItemWrapper: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingRight: 10,
  },
  songThumbnailWrapper: {
    height: 55,
    width: 55,
  },
  songThumbNailImg: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 4,
  },
  songInfoArea: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  songSingerText: {
    color: color.mainTextL2,
    fontSize: 12,
    marginTop: -1,
  },
  songActionBtn: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  isPlayingSong: {
    height: 25,
    width: 25,
    marginRight: 10,
  },

  isPlayingSongImg: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
  },

  //list
  songInfoAreaWrapperList: {
    flexDirection: 'row',
  },
  thumbnailWrapperList: {
    height: 60,
    width: 60,
    marginRight: 20,
  },
});

export default styles;
