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
import MaskedView from '@react-native-masked-view/masked-view';
import ActionPlayingIcon from './components/ActionPlayingIcon';

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
        <ActionPlayingIcon song={song} />
      </ImageBackground>
    </View>
  );
}

const List = memo(function () {
  const dispatch = useDispatch();
  const playListRef = useRef();
  const allState = store?.getState();
  const currSong = useSelector(state => state?.player?.currSong);
  const playListId = useSelector(
    state => state?.player?.currPlayList?.encodeId,
  );

  const playList = allState?.player?.currPlayList;
  if (!playList) return null;

  // console.log(currSong?.encodeId);
  // console.log(playList?.encodeId);

  const timeoutHandleScroll = useRef();
  const scrollViewRef = useRef();

  const scrollPageEvent = ({nativeEvent}) => {
    clearTimeout(timeoutHandleScroll.current);
    timeoutHandleScroll.current = setTimeout(() => {
      const position = nativeEvent.contentOffset;
      const index = Math.round(position.y / SCREEN_HEIGHT);
      dispatch(setCurrSong({...playList?.song?.items[index], isScroll: true}));
    }, 500);
  };

  let currIndex = playList?.song?.items?.findIndex(
    song => currSong?.encodeId == song.encodeId,
  );

  currIndex = currIndex < 0 ? 0 : currIndex;

  useEffect(() => {
    if (!currSong || !playList) return;
    if (currSong?.isScroll) return;

    if (!currIndex && currIndex != 0) return;
    if (scrollViewRef?.current) {
      // console.log('scroll');
      scrollViewRef.current?.scrollToIndex({
        index: currIndex,
        animated: true,
      });
    }
  }, [currSong?.encodeId]);

  useEffect(() => {
    // console.log(playListId);
  }, [playListId]);

  return (
    <FlatList
      // initialScrollIndex={currIndex}
      onMomentumScrollEnd={scrollPageEvent || (() => {})}
      ref={scrollViewRef}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      data={playList?.song?.items}
      renderItem={renderItem}
      initialNumToRender={2}
      maxToRenderPerBatch={100}
      windowSize={5}
      removeClippedSubviews={false}
      onScrollToIndexFailed={info => {
        // const wait = new Promise(resolve => setTimeout(resolve, 500));
        // wait.then(() => {
        //   scrollViewRef.current?.scrollToIndex({
        //     index: currIndex,
        //     animated: true,
        //   });
        // });
      }}
      keyExtractor={(item, index) => item?.encodeId}
    />
  );
});

function Player() {
  const dispatch = useDispatch();

  const currPlayList = useSelector(
    state => state.player.currPlayList,
    shallowEqual,
  );

  useFocusEffect(() => {
    dispatch(setIsPlayerPage(true));

    return () => {
      dispatch(setIsPlayerPage(false));
    };
  });
  return (
    <>
      {currPlayList ? (
        <>
          <Header />
          <List />
        </>
      ) : (
        <Loader backgroundColor={color.gray600} content="Đang tải" />
      )}
    </>
  );
}

export default Player;
