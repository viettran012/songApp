import {TextB, TextBB} from '../../../components/GlobalComponents';
import {View, ImageBackground, Image} from 'react-native';
import {useSelector} from 'react-redux';
import DefaultLayout from '../../../layouts/DefaultLayout';
import {HeaderBack} from '../../../layouts/Header';
import styles from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import {color, gradientGroup} from '../../../assets/interfaces';
import {useCallback, useEffect, useState} from 'react';
import Loader from '../../../components/Loader';
import playListService from '../../../services/playListService';
import {FontistoIcon, IoniconsIcon} from '../../../assets/icons';
import Button from '../../../components/Button';
import getSongService from '../../../services/getSongService';
import {useDispatch} from 'react-redux';
import {setCurrPlayList, setCurrSong} from '../../../redux/actions/player';

function SongItem({song, playList, navigation}) {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(false);
  const playSong = song => {
    setTimeout(() => {
      setIsloading(false);
      dispatch(setCurrPlayList(playList));
      dispatch(setCurrSong(song));
      navigation.navigate('Player');
    }, 100);
    setIsloading(true);
  };

  return (
    <Button
      onPress={() => {
        playSong(song);
      }}>
      <View style={styles.songItemWrapper}>
        <View style={styles.songThumbnailWrapper}>
          <Image
            source={{
              uri: song?.thumbnailM,
            }}
            style={styles.songThumbNailImg}
          />
        </View>
        <View style={styles?.songInfoArea}>
          <TextBB numLine={1}>{song?.title}</TextBB>
          <TextB numLine={1} style={styles.songSingerText}>
            {song?.artistsNames}
          </TextB>
        </View>
        <Button round={true} underlayColor={true} onPress={() => {}}>
          <View style={styles.songActionBtn}>
            {isLoading ? (
              <Loader />
            ) : (
              <IoniconsIcon
                name="ellipsis-horizontal"
                size={20}
                color={color.mainTextL3}
              />
            )}
          </View>
        </Button>
      </View>
    </Button>
  );
}

function SongItemList({song, playList, navigation}) {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(false);

  const isPlaying = useSelector(
    state => state.player?.currSong?.encodeId === song?.encodeId,
  );

  const playSong = song => {
    setTimeout(() => {
      setIsloading(false);

      dispatch(setCurrSong(song));
    }, 100);
    setIsloading(true);
  };

  return (
    <Button
      style={[isPlaying ? {backgroundColor: color.grayE} : {}]}
      onPress={() => {
        playSong(song);
      }}>
      <View style={[styles.songItemWrapper, {marginBottom: 7, marginTop: 7}]}>
        <View style={styles.songThumbnailWrapper}>
          <Image
            source={{
              uri: song?.thumbnailM,
            }}
            style={styles.songThumbNailImg}
          />
        </View>
        <View style={styles?.songInfoArea}>
          <TextBB numLine={1}>{song?.title}</TextBB>
          <TextB numLine={1} style={[styles.songSingerText]}>
            {song?.artistsNames}
          </TextB>
        </View>
        <Button round={true} underlayColor={true} onPress={() => {}}>
          <View style={styles.songActionBtn}>
            {isLoading ? (
              <Loader />
            ) : (
              <IoniconsIcon
                name="ellipsis-horizontal"
                size={20}
                color={color.mainTextL3}
              />
            )}
          </View>
        </Button>
      </View>
    </Button>
  );
}

export default SongItem;
export {SongItemList};
