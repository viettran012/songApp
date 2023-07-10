import Carousel from 'react-native-reanimated-carousel';
import {SCREEN_WIDTH, color} from '../../../../assets/interfaces';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../styles';
import {OcticonsIcon} from '../../../../assets/icons';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {setFocusPlayList} from '../../../../redux/actions/appState';
import Button from '../../../../components/Button';

const bannerRender = ({item, index, navigation}) => {
  const dispatch = useDispatch();
  const handleClickPlayList = useCallback(item => {
    if (navigation && item) {
      dispatch(setFocusPlayList(item));
      navigation.navigate('PlayListScreen');
    }
  }, []);
  return (
    <Button
      onPress={() => {
        handleClickPlayList(item);
      }}
      style={styles.sliderItem}>
      <FastImage
        style={styles.bannerImg}
        // resizeMode="contain"
        source={{
          uri: item?.banner,
          priority: FastImage.priority.normal,
        }}
      />
    </Button>
  );
};

function Slider({data_, navigation}) {
  const data = data_?.items;
  // console.log(data);
  const [currIndex, setIndex] = useState(0);
  const dispatch = useDispatch();
  const handleClickPlayList = useCallback(item => {
    if (navigation && item) {
      dispatch(setFocusPlayList(item));
      navigation.navigate('PlayListScreen');
    }
  }, []);
  return (
    <>
      <Carousel
        loop
        width={SCREEN_WIDTH - 40}
        height={80}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={3000}
        onScrollEnd={setIndex}
        renderItem={({item, index}) => {
          return (
            <Button
              onPress={() => {
                handleClickPlayList(item);
              }}
              style={styles.sliderItem}>
              <FastImage
                style={styles.bannerImg}
                // resizeMode="contain"
                source={{
                  uri: item?.banner,
                  priority: FastImage.priority.normal,
                }}
              />
            </Button>
          );
        }}
      />

      <View style={styles.paginationSlider}>
        {data?.map((item, index) => {
          return (
            <View key={index} style={styles.paginationSliderDot}>
              <OcticonsIcon
                name="dot-fill"
                size={10}
                color={index == currIndex ? color.blue : color.white}
              />
            </View>
          );
        })}
      </View>
    </>
  );
}

export default Slider;
