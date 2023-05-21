import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  LogBox,
} from 'react-native';
import DefaultLayout from '../../../layouts/DefaultLayout';
import styles from './styles';
import Header from './components/Header';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {setIsPlayerPage} from '../../../redux/actions/appState';
import Carousel from 'react-native-reanimated-carousel';
import Button from '../../../components/Button';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  gradientGroup,
} from '../../../assets/interfaces';
import {setCurrSong} from '../../../redux/actions/player';
import {useEffect, useLayoutEffect, useRef, useState, memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../../../components/Loader';
import Slider from '@react-native-community/slider';
import {IoniconsIcon, FontistoIcon} from '../../../assets/icons';
import {TextB, TextBB} from '../../../components/GlobalComponents';
import {color} from '../../../assets/interfaces';
import Action from './components/Action';
import store from '../../../redux/store';
import ListSheet from './components/ListSheet';

function renderItem({item, index}) {
  const song = item;
  return (
    <View key={index} style={styles.screenWrapper}>
      <ImageBackground
        blurRadius={4}
        style={styles.wrapperSlide}
        source={{
          uri: song?.thumbnailM,
        }}>
        <View style={styles.songThumbnailWrapper}>
          <Image
            source={{
              uri: song?.thumbnailM,
            }}
            style={styles.songThumbnail}
          />
        </View>
        <LinearGradient
          colors={gradientGroup.blackWhiteBlack}
          style={styles.maskScreen}
        />
        <Action song={song} />
      </ImageBackground>
    </View>
  );
}

const List = memo(function ({playListId}) {
  const allState = store.getState();
  if (!allState) return null;

  const playList = allState?.player?.currPlayList;
  if (!playList) return null;

  return (
    <FlatList
      nestedScrollEnabled
      data={playList?.song?.items}
      renderItem={renderItem}
      initialNumToRender={1}
      maxToRenderPerBatch={100}
      windowSize={2}
      removeClippedSubviews={false}
      keyExtractor={(item, index) => index}
    />
  );
});

function Player() {
  const dispatch = useDispatch();
  const timeoutHandleScroll = useRef();
  const scrollViewRef = useRef();
  const currSong = useSelector(state => state.player.currSong);
  const currPlayList = useSelector(
    state => state.player.currPlayList,
    shallowEqual,
  );
  const [isLoading, setIsLoading] = useState(false);

  const scrollPageEvent = ({nativeEvent}) => {
    clearTimeout(timeoutHandleScroll.current);
    timeoutHandleScroll.current = setTimeout(() => {
      const position = nativeEvent.contentOffset;
      const index = Math.round(nativeEvent.contentOffset.y / SCREEN_HEIGHT);
      if (currPlayList?.song?.items)
        dispatch(
          setCurrSong({...currPlayList?.song?.items[index], isScroll: true}),
        );
    }, 500);
  };

  // useLayoutEffect(() => {
  //   console.log('loadingtrue');
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 100);
  // }, [currPlayList?.encodeId]);

  useEffect(() => {
    if (currSong?.isScroll) return;
    const currIndex = currPlayList?.song?.items?.findIndex(
      song => currSong?.encodeId == song.encodeId,
    );
    if (!currIndex && currIndex != 0) return;
    if (scrollViewRef) {
      scrollViewRef.current.scrollTo({
        x: 0,
        y: currIndex * SCREEN_HEIGHT,
        animated: true,
      });
    }
  }, [currSong?.encodeId]);

  useFocusEffect(() => {
    dispatch(setIsPlayerPage(true));

    return () => {
      dispatch(setIsPlayerPage(false));
    };
  });

  return (
    <>
      <DefaultLayout
        scrollViewRef={scrollViewRef}
        scrollPageEvent={scrollPageEvent}
        isFullScreen={true}
        header={<Header />}>
        {currPlayList && !isLoading ? (
          <>
            <List playListId={currPlayList?.encodeId} />
          </>
        ) : (
          <Loader backgroundColor={color.gray600} content="Đang tải" />
        )}
      </DefaultLayout>
    </>
  );
}

export default Player;
