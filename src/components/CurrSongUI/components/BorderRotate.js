import CircularProgress from 'react-native-circular-progress-indicator';
import {useSelector} from 'react-redux';
import {color} from '../../../assets/interfaces';
import * as Animatable from 'react-native-animatable';
import styles from '../styles';

function BorderRotate() {
  const isPlaying = useSelector(state => state.player?.isPlaying);

  return (
    <Animatable.View
      style={styles.borderRotate}
      animation={isPlaying ? 'rotate' : ''}
      duration={3000}
      iterationCount={'infinite'}
    />
  );
}

export default BorderRotate;
