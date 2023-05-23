import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../styles';
import Button from '../../../../components/Button';
import SliderLib from '@react-native-community/slider';
import {IoniconsIcon, FontistoIcon} from '../../../../assets/icons';
import {TextB, TextBB} from '../../../../components/GlobalComponents';
import {color} from '../../../../assets/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrTime} from '../../../../redux/actions/player';
import {memo, useRef, useState} from 'react';
import getTime from '../../../../utils/getTime';

function Slider({song}) {
  const [dragValue, setDragValue] = useState();
  const [isShowDuration, setIsShowDuration] = useState(false);

  const showDurationTimeOut = useRef();

  const songId = song.encodeId;
  const currTime = useSelector(state => state.player?.currTimeSong[songId]);
  const dispatch = useDispatch();
  const handleSeek = e => {
    dispatch(setCurrTime(e));
    setIsShowDuration(false);
    clearTimeout(showDurationTimeOut.current);
  };
  const handleDrag = value => {
    setDragValue(value);
  };
  return (
    <>
      {isShowDuration ? (
        <View style={styles.durationWrapper}>
          <TextBB style={styles.durationText}>
            {`${getTime.caculateTime(
              Math.floor(Number(dragValue || 0)),
            )} / ${getTime.caculateTime(Number(song?.duration || 0))}`}
          </TextBB>
        </View>
      ) : null}
      <View style={{width: '100%'}}>
        <SliderLib
          value={currTime || 0}
          onSlidingComplete={handleSeek}
          onSlidingStart={() => {
            showDurationTimeOut.current = setTimeout(() => {
              setIsShowDuration(true);
            }, 100);
          }}
          style={{height: 40, marginHorizontal: -15}}
          minimumValue={0}
          maximumValue={song?.duration || 200}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#ffffff"
          thumbTintColor="#ffffff"
          onValueChange={handleDrag}
        />
      </View>
    </>
  );
}

export default memo(Slider);
