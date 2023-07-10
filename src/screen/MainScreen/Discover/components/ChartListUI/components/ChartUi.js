import {
  TextB,
  TextBB,
  TextM,
} from '../../../../../../components/GlobalComponents';
import {View, Image} from 'react-native';
import styles from '../styles';
import {IoniconsIcon} from '../../../../../../assets/icons';
import {color} from '../../../../../../assets/interfaces';
import {EntypoIcon} from '../../../../../../assets/icons';
import Button from '../../../../../../components/Button';
import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {setFocusPlayList} from '../../../../../../redux/actions/appState';
import {
  setCurrLyric,
  setCurrPlayList,
  setCurrSong,
} from '../../../../../../redux/actions/player';
import FastImage from 'react-native-fast-image';

function ChartUI({data, index, navigation}) {
  const dispatch = useDispatch();
  const handleClickPlayList = useCallback(() => {
    if (navigation && data) {
      dispatch(setFocusPlayList({encodeId: data?.playlistId, song: data}));
      navigation.navigate('PlayListScreen');
    }
  }, []);
  const playSong = useCallback(song => {
    dispatch(
      setCurrPlayList([
        {
          encodeId: data?.playlistId,
          song: data,
          title: data?.cc_title,
        },
        song,
      ]),
    );

    navigation.navigate('Player');
  }, []);
  return (
    <View style={[styles.chartWrapper, index == 0 ? {marginLeft: 20} : {}]}>
      <Button onPress={handleClickPlayList}>
        <View style={styles.rankNameTitle}>
          <TextBB style={styles.titleChart}>{data?.c_title} </TextBB>
          <EntypoIcon
            name="chevron-thin-right"
            color={color.mainText}
            size={15}
          />
        </View>
      </Button>

      <View style={styles.chartArea}>
        {data?.items?.map((item, index) => {
          if (index > 4) {
            return null;
          }
          return (
            <Button
              key={index}
              onPress={() => {
                playSong(item);
              }}>
              <View style={styles.songItemWrapper}>
                <View style={styles.thumbnailSongWrapper}>
                  <FastImage
                    source={{
                      uri: item?.thumbnailM,
                      priority: FastImage.priority.normal,
                    }}
                    style={[styles.thumbnailSong]}
                  />
                </View>
                <View style={styles.rankWrapper}>
                  <TextBB style={styles.rankText}>{index + 1}</TextBB>
                  {item?.rakingStatus < 0 ? (
                    <IoniconsIcon
                      name="caret-down"
                      size={14}
                      color={color.red}
                    />
                  ) : (
                    <IoniconsIcon
                      name="caret-up"
                      size={14}
                      color={color.green}
                    />
                  )}
                </View>
                <View style={styles.titleSongWrapper}>
                  <TextBB style={styles.titleText} numLine={1}>
                    {item?.title}
                  </TextBB>
                  <TextB style={styles.singerText}>{item?.artistsNames}</TextB>
                </View>
              </View>
            </Button>
          );
        })}
      </View>
    </View>
  );
}

export default ChartUI;
