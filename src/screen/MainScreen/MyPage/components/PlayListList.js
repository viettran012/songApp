import {View} from 'react-native';
import styles from '../styles';
import {
  PlayListItem,
  PlayListItemAdd,
  PlayListItemFavorite,
} from './PlayListItem';

function PlayListList({navigation, isPicker}) {
  return (
    <View style={styles.playListWrapper}>
      <PlayListItemAdd navigation={navigation} />
      {!isPicker ? <PlayListItemFavorite navigation={navigation} /> : null}
      <PlayListItem navigation={navigation} isPicker={isPicker} />
    </View>
  );
}

export default PlayListList;
