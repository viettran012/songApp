import {DISCOVER_HEADER_ITEMS} from '../../../../item/DISCOVER_ITEMS';
import {View} from 'react-native';
import styles from '../styles';
import Button from '../../../../components/Button';

function Header() {
  return (
    <View style={styles.headerWrapper}>
      {DISCOVER_HEADER_ITEMS.map((item, index) => {
        if (item.type == 'icon') {
          const icon = item?.icon;
          return (
            <Button round onPress={() => {}} underlayColor={true} key={index}>
              <View style={styles.headerIcon}>{icon}</View>
            </Button>
          );
        }
        if ((item.type = 'search')) {
          const components = item?.icon;
          return (
            <View style={styles.searchHeaderIcon} key={index}>
              {components}
            </View>
          );
        }
      })}
    </View>
  );
}

export default Header;
