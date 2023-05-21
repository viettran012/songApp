import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../styles';
import Button from '../../../../components/Button';
import SliderLib from '@react-native-community/slider';
import {IoniconsIcon, FontistoIcon} from '../../../../assets/icons';
import {TextB, TextBB} from '../../../../components/GlobalComponents';
import {color} from '../../../../assets/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrTime} from '../../../../redux/actions/player';
import {memo} from 'react';

function Slider({song}) {
  const songId = song.encodeId;
  const currTime = useSelector(state => state.player?.currTimeSong[songId]);
  const dispatch = useDispatch();
  const handleSeek = e => {
    dispatch(setCurrTime(e));
  };
  return (
    <SliderLib
      value={currTime || 0}
      onSlidingComplete={handleSeek}
      style={{height: 40, marginHorizontal: -15}}
      minimumValue={0}
      maximumValue={song?.duration || 200}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#ffffff"
      thumbTintColor="#ffffff"
    />
  );
}

export default memo(Slider);
