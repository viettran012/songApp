import {TextB, TextBB} from '../../components/GlobalComponents';
import {View, ImageBackground, Image, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import DefaultLayout from '../../layouts/DefaultLayout';
import {HeaderBack} from '../../layouts/Header';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {color, gradientGroup} from '../../assets/interfaces';
import Loader from '../../components/Loader';
import playListService from '../../services/playListService';
import {FontistoIcon, IoniconsIcon} from '../../assets/icons';
import Button from '../../components/Button';
import getSongService from '../../services/getSongService';
import {useDispatch} from 'react-redux';
import {setCurrPlayList, setCurrSong} from '../../redux/actions/player';
import SongItem, {SongItemList} from './components/SongItem';
import FastImage from 'react-native-fast-image';
import {useCallback, useEffect, useState, memo, useContext} from 'react';
import {CallBackScrollContext} from '../../layouts/DefaultLayout';

function HederList({navigation, playList}) {
  return (
    <ImageBackground
      blurRadius={10}
      source={{
        uri: playList?.thumbnailM,
      }}
      style={styles.topImgBgWrapper}>
      <LinearGradient
        colors={gradientGroup.blackToWhite}
        style={styles.maskThumb}></LinearGradient>
      <View style={styles.playListInfoArea}>
        <View style={styles.thumbnailArea}>
          <View style={styles.thumbnailWrapper}>
            <FastImage
              style={styles.thumbnailImg}
              source={{
                uri: playList?.thumbnailM,
              }}
            />
          </View>
        </View>
        <View>
          <TextBB numLine={2} style={styles.playListTitleText}>
            {playList?.title}
          </TextBB>
          <TextB style={styles.playListSingle}>
            {playList?.artists
              ?.map(item => {
                return `${item?.name}`;
              })
              .join(', ')}
          </TextB>
        </View>
        <View style={styles.actionWrapper}>
          <View style={styles.statisticalArea}>
            <View style={styles.statisticalWrapper}>
              <IoniconsIcon name="heart" size={31} color={color.mainText} />
              <TextB style={styles.statisticalNumText}>{playList?.like}</TextB>
            </View>
            <View style={styles.statisticalWrapper}>
              <FontistoIcon name="share-a" size={28} color={color.mainText} />
              <TextB style={styles.statisticalNumText}>{1123}</TextB>
            </View>
          </View>

          <Button
            onPress={() => {
              dispatch(setCurrPlayList([playList, playList?.song?.items[0]]));
              navigation.navigate('Player');
            }}>
            <LinearGradient
              style={styles.playAllBtn}
              useAngle={true}
              angle={25}
              colors={gradientGroup.mainL}>
              <IoniconsIcon name="play" size={25} color={color.white} />
              <TextB style={styles.playAllBtnText}>Tất cả</TextB>
            </LinearGradient>
          </Button>
        </View>
        <TextB style={styles.playListToltal}>
          {playList?.song?.items?.length} bài
        </TextB>
      </View>
    </ImageBackground>
  );
}

function PlayListScreen({navigation}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [playList, setPlayList] = useState();
  const playList_ = useSelector(state => state.appState.focusedPlayList);
  const playListId = playList_?.encodeId;

  useEffect(() => {
    playListService(playListId)
      .then(data => {
        setIsLoading(false);
        if (data?.result == 1) {
          setPlayList(data?.data?.data);
        }
      })
      .catch(error => {
        setIsLoading(false);
      });
  }, []);

  return (
    <DefaultLayout
      notScrollView={true}
      isChangeHeaderOpacity={true}
      isBackButton={true}
      isFullScreen={true}
      navigation={navigation}
      header={<HeaderBack title={playList?.title} />}>
      {isLoading ? (
        <Loader content="Đang tải" />
      ) : playList ? (
        <View style={styles.screenWrapper}>
          <View>
            <SongList navigation={navigation} playList={playList} />
          </View>
        </View>
      ) : null}
    </DefaultLayout>
  );
}

const SongList = memo(({navigation, playList}) => {
  const handleBodyScroll = useContext(CallBackScrollContext);
  console.log('rerender');
  return (
    <FlatList
      onScroll={handleBodyScroll}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      ListHeaderComponent={
        <HederList playList={playList} navigation={navigation} />
      }
      data={playList?.song?.items}
      renderItem={({item, index}) => (
        <SongItem
          key={index}
          song={item}
          navigation={navigation}
          playList={playList}
        />
      )}
      initialNumToRender={10}
      maxToRenderPerBatch={100}
      windowSize={10}
      removeClippedSubviews={false}
      keyExtractor={(item, index) => item?.encodeId}
    />
  );
});

const PlayListScreenListSheet = memo(() => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const playList = useSelector(state => state.player.currPlayList);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Loader content="Đang tải" />
  ) : playList?.song ? (
    <View style={[styles.screenWrapper]}>
      <TextB
        style={[
          styles.playListToltal,
          {paddingHorizontal: 20, paddingBottom: 10},
        ]}>
        Tiếp theo - {playList?.song?.items?.length} bài
      </TextB>
      {playList?.song?.items?.map((song, index) => {
        return <SongItemList key={index} song={song} playList={playList} />;
      })}
    </View>
  ) : null;
});

export default PlayListScreen;
export {PlayListScreenListSheet};
