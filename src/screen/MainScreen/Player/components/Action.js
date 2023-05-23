import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../styles';
import Button from '../../../../components/Button';
import Slider from './Slider';
import {IoniconsIcon, FontistoIcon} from '../../../../assets/icons';
import {TextB, TextBB} from '../../../../components/GlobalComponents';
import {color} from '../../../../assets/interfaces';
import {useDispatch} from 'react-redux';
import {
  setCurrTime,
  showListSheet,
  togglePlaying,
} from '../../../../redux/actions/player';
import {useEffect} from 'react';
import {getSongInfoService} from '../../../../services/getSongService';
import Lyric from './Lyric';

function Action({song}) {
  const dispatch = useDispatch();
  return (
    <View style={styles.actionWrapperAll}>
      <Lyric songId={song.encodeId} />
      <Button
        onPress={() => {
          dispatch(togglePlaying());
        }}
        style={styles.controlArea}>
        <View></View>
      </Button>
      <View style={{alignItems: 'center'}}>
        <View style={styles.songInfoWrapper}>
          <TextBB style={styles.songInfoTitle}>{song?.title}</TextBB>
          <TextB style={styles.artInfoTitle}>{song?.artistsNames}</TextB>
        </View>
        <View style={styles.actionBottomArea}>
          <View style={styles.statisticalArea}>
            <View style={styles.statisticalWrapper}>
              <IoniconsIcon name="heart" size={28} color={color.white} />
              <TextB style={styles.statisticalNumText}></TextB>
            </View>
            <View style={styles.statisticalWrapper}>
              <FontistoIcon name="share-a" size={25} color={color.white} />
              <TextB style={styles.statisticalNumText}></TextB>
            </View>
          </View>
          <Button
            round={true}
            underlayColor={true}
            onPress={() => {
              dispatch(showListSheet(Math.random()));
            }}>
            <View style={styles.buttonWrapper}>
              <IoniconsIcon
                name="ellipsis-horizontal"
                size={25}
                color={color.white}
              />
            </View>
          </Button>
        </View>
        <Slider song={song} />
      </View>
    </View>
  );
}

export default Action;
