import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
  border,
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
    height: range.headerHeight + STATUS_BAR_HEIGHT,
    // backgroundColor: color.gray,
    paddingTop: STATUS_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 999,
    elevation: 999,
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
    width: '100%',
  },
  songInfoWrapper: {
    marginBottom: 10,
    width: '100%',
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
    borderRadius: 10,
    overflow: 'hidden',
    // marginHorizontal: 15,
  },
  bgStyle: {
    // paddingVertical: 15,
    borderRadius: 10,
  },
  durationWrapper: {
    position: 'absolute',
    backgroundColor: color.transparentBlackL,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 50,
    top: -50,
  },
  durationText: {
    color: color.white,
    fontSize: 18,
  },

  controlArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: color.blue,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: color.blue,
  },
  actionPlayingIconWrapper: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  actionPlayingIcon: {
    backgroundColor: color.transparentBlackL,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  //song option
  songOptionWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    ...border.bottom,
    paddingVertical: 7,
    paddingBottom: 7,
    // marginBottom: 7,
  },
  optionTconWrapperBtn: {
    height: 50,
    width: 50,
    backgroundColor: color?.grayE,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songOptionItemWrapper: {
    width: 80,
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 8,
  },
  optionSongTitle: {
    color: color.mainTextL1,
    fontSize: 12,
    textAlign: 'center',
  },
  songOptionTitleWrapper: {
    // flex: 1,
    marginTop: 7,
  },
});

export default styles;
