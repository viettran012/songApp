import {View, Text, ImageBackground, Image, Animated} from 'react-native';
import styles from '../styles';
import Button from '../../../../components/Button';
import Slider from './Slider';
import {IoniconsIcon, FontistoIcon} from '../../../../assets/icons';
import {
  AnimatedTextBB,
  TextB,
  TextBB,
} from '../../../../components/GlobalComponents';
import {color} from '../../../../assets/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrTime} from '../../../../redux/actions/player';
import {useEffect, memo, useRef} from 'react';
import {getSongInfoService} from '../../../../services/getSongService';

const marginDistance = 15;
function Lyric({songId}) {
  let text = useRef([]);
  let text2 = useRef([]);
  let text3 = useRef([]);

  const margin = useRef(new Animated.Value(marginDistance)).current;
  const scale = useRef(new Animated.Value(17)).current;
  const scaleR = useRef(new Animated.Value(23)).current;

  const lyric = useSelector(state => state.player.currLyric[songId]) || [];

  const currTime = useSelector(state => state.player?.currTimeSong[songId]);
  const timeCompare = Number(currTime + 0.7) * 1000;

  if (lyric) {
    if (lyric?.isVip) {
      text.current = ['Yêu cầu VIP'];
    } else {
      for (let index_ in lyric) {
        const index = Number(index_);
        const item = lyric[index];
        const length = item?.words?.length;
        const startTime = item?.words[0]?.startTime;
        const endTime = item?.words[length - 1]?.endTime;

        if (startTime < timeCompare && endTime > timeCompare) {
          text.current = item?.words.map(it => it?.data);
          text2.current = lyric[index + 1]
            ? lyric[index + 1]?.words.map(it => it?.data)
            : [];
          text3.current = lyric[index - 1]
            ? lyric[index - 1]?.words.map(it => it?.data)
            : [];
          break;
        }
      }
    }
  }

  useEffect(() => {
    margin.setValue(marginDistance);
    scale.setValue(17);
    scaleR.setValue(23);

    Animated.timing(scale, {
      toValue: 23,
      duration: 150,
      useNativeDriver: false,
    }).start();

    Animated.timing(scaleR, {
      toValue: 17,
      duration: 150,
      useNativeDriver: false,
    }).start();

    Animated.timing(margin, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [text.current.join('')]);

  useEffect(() => {
    text.current = [];
    text2.current = [];
    text3.current = [];
  }, [songId]);

  return (
    <View>
      <AnimatedTextBB
        style={[styles.lyricText3, {marginTop: margin, fontSize: scaleR}]}>
        {text3.current ? text3.current?.join(' ') : ''}
      </AnimatedTextBB>
      <AnimatedTextBB style={[styles.lyricText, {fontSize: scale}]}>
        {text.current ? text.current?.join(' ') : ''}
      </AnimatedTextBB>
      <TextBB style={styles.lyricText2}>
        {text2.current ? text2.current?.join(' ') : ''}
      </TextBB>
    </View>
  );
}

export default memo(Lyric);
