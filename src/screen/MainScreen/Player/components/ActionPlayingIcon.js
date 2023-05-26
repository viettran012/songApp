import {useEffect, useRef} from 'react';
import styles from '../styles';
import {View} from 'react-native';
const {IoniconsIcon} = require('../../../../assets/icons');
const {color} = require('../../../../assets/interfaces');
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';

function ActionPlayingIcon({song}) {
  const animatedRef = useRef();
  const songId = song.encodeId;

  const playingSong = useSelector(state => state.player?.isPlayingSong[songId]);
  const isPlaying = playingSong?.isPlaying;

  // console.log(playingSong);

  useEffect(() => {
    if (
      animatedRef.current &&
      isPlaying !== 'undefined' &&
      isPlaying != undefined
    ) {
      animatedRef.current?.fadeOut(700);
    }
  });
  return isPlaying !== 'undefined' && isPlaying != undefined ? (
    <View style={styles.actionPlayingIconWrapper} pointerEvents="none">
      <Animatable.View
        ref={animatedRef}
        style={styles.actionPlayingIcon}
        animation={'fadeOut'}
        duration={500}
        iterationCount={1}>
        <IoniconsIcon
          name={isPlaying ? 'play' : 'pause'}
          size={30}
          color={color.white}
        />
      </Animatable.View>
    </View>
  ) : null;
}

export default ActionPlayingIcon;
