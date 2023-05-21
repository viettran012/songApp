import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
  color,
  range,
} from '../../../assets/interfaces';

const styles = StyleSheet.create({
  screenWrapper: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  maskScreen: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    // zIndex: 10,
  },
  wrapperSlide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  songThumbnailWrapper: {
    width: '100%',
    height: SCREEN_WIDTH,
    position: 'absolute',
  },
  songThumbnail: {
    objectFit: 'contain',
    flex: 1,
    height: undefined,
    width: undefined,
    opacity: 0.5,

    // borderRadius: 4,
  },
  headerWrapper: {
    // backgroundColor: color.blue,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  titleHeaderText: {
    fontSize: 17,
    color: color.white,
    // maxWidth: '80%',
  },
  titleHeaderWrapper: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  buttonWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionWrapperAll: {
    // backgroundColor: color.blue,
    height: '100%',
    width: '100%',
    paddingBottom: range.tabbarHeight - 10,
    paddingTop: range.headerHeight + STATUS_BAR_HEIGHT + 40,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
  statisticalArea: {
    flexDirection: 'row',
  },
  actionBottomArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  songInfoWrapper: {
    marginBottom: 10,
  },
  songInfoTitle: {
    fontSize: 20,
    color: color.white,
    marginBottom: 7,
  },
  artInfoTitle: {
    fontSize: 15,
    color: color.whiteL1,
  },
  lyricText: {
    fontSize: 23,
    color: color.white,
    marginTop: 0,
  },
  lyricText2: {
    fontSize: 17,
    color: color.white,
    opacity: 0.5,
    marginTop: 15,
  },
  lyricText3: {
    fontSize: 17,
    color: color.white,
    opacity: 0.5,
    marginBottom: 15,
  },

  //list sheet

  sheetContainer: {
    // borderRadius: 10,
    overflow: 'hidden',
    // marginHorizontal: 15,
  },
  bgStyle: {
    // paddingVertical: 15,
  },
});

export default styles;
