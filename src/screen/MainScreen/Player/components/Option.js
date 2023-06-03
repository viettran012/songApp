import {View} from 'react-native';
import {SONG_DETAIL_ACTION} from '../../../../item/ACTION';
import styles from '../styles';
import {TextB} from '../../../../components/GlobalComponents';
import Button from '../../../../components/Button';
import {color} from '../../../../assets/interfaces';
import {useCallback} from 'react';

function Option() {
  const handlePress = useCallback(({option}) => {
    const callback = option?.callback;
    if (callback) {
      callback();
    }
  });

  return (
    <View style={styles?.songOptionWrapper}>
      {SONG_DETAIL_ACTION?.map((option, index) => {
        const IconLib = option?.iconLib;
        return (
          <Button
            onPress={() => {
              handlePress({option});
            }}
            underlayColor={true}
            underLayColorHex={color.gray600}
            key={index}
            style={styles.songOptionItemWrapper}>
            <>
              <View style={styles.optionTconWrapperBtn}>
                <IconLib
                  name={option?.iconName}
                  size={option?.iconSize || 28}
                  color={option?.iconColor}
                />
              </View>
              <View style={styles.songOptionTitleWrapper}>
                <TextB numLine={2} style={styles.optionSongTitle}>
                  {option?.title}
                </TextB>
              </View>
            </>
          </Button>
        );
      })}
    </View>
  );
}

export default Option;
