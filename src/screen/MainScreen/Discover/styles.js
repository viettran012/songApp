import {StyleSheet} from 'react-native';
import {color} from '../../../assets/interfaces';

const styles = StyleSheet.create({
  screenWrapper: {
    // height: 10000,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  //header
  headerIcon: {
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: color.black,
  },
  headerWrapper: {
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 5,
  },
  searchHeaderIcon: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 2,
  },

  //slide
  sliderWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  sliderItem: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerImg: {
    flex: 1,
    height: '100%',
  },
  paginationSlider: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  paginationSliderDot: {
    marginHorizontal: 2,
  },
});

export default styles;
