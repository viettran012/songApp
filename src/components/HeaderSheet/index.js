import {EvilIconsIcon, IoniconsIcon} from '../../assets/icons';
import {color} from '../../assets/interfaces';
import Button from '../Button';
import {TextBB, TextB} from '../GlobalComponents';
import {View, StyleSheet} from 'react-native';

function HeaderSheet({title, sheetRef, hideCloseBtn}) {
  return (
    <View style={styles.wrapper}>
      <TextBB style={styles.titleText}>{title}</TextBB>

      {hideCloseBtn ? null : (
        <Button
          style={styles?.closeIcon}
          underlayColor={true}
          onPress={() => {
            if (sheetRef) {
              sheetRef?.close();
            }
          }}>
          <EvilIconsIcon name="close" size={32} color={color.mainTextL1} />
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  closeIcon: {
    height: 45,
    width: 45,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 999,
    elevation: 999,
  },
  titleText: {
    fontSize: 18,
  },
});

export default HeaderSheet;
