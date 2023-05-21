import {Image, Text, View} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {IoniconsIcon} from '../../assets/icons';
import {color} from '../../assets/interfaces';
import {TextM} from '../GlobalComponents';
import CircularProgress from 'react-native-circular-progress-indicator';
import CircularValue from './components/CircularValue';
import BorderRotate from './components/BorderRotate';

function CurrSongUI() {
  const currSong = useSelector(state => state.player.currSong);

  return (
    <View style={styles.ui}>
      <BorderRotate />
      <View style={styles.circularProgress}>
        <CircularValue />
      </View>
      <View
        style={[
          styles.uiWrapper,
          currSong
            ? {}
            : {
                justifyContent: 'center',
                alignItems: 'center',
              },
        ]}>
        {currSong ? (
          <Image
            source={{
              uri: currSong?.thumbnailM,
            }}
            style={styles.songThumbnail}
          />
        ) : (
          <>
            <IoniconsIcon
              name="musical-notes-outline"
              size={28}
              color={color.mainTextL2}
            />
          </>
        )}
      </View>
    </View>
  );
}

export default CurrSongUI;
