import CircularProgress from 'react-native-circular-progress-indicator';
import {useSelector} from 'react-redux';
import {color} from '../../../assets/interfaces';

function CircularValue() {
  const currSong = useSelector(state => state.player.currSong);
  const songId = currSong?.encodeId;
  const currTime = useSelector(state => state.player?.currTimeSong[songId]);

  return (
    <CircularProgress
      value={currTime}
      radius={20}
      duration={0}
      progressValueColor={'#000000'}
      maxValue={currSong?.duration || 200}
      activeStrokeWidth={3}
      inActiveStrokeWidth={3}
      showProgressValue={false}
      activeStrokeSecondaryColor={color.blue}
      activeStrokeColor={color.turquoise}
      inActiveStrokeColor={color.transparent}
    />
  );
}

export default CircularValue;
