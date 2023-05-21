import {color} from '../../../../assets/interfaces';
import {TextB, TextBB} from '../../../../components/GlobalComponents';
import {HeaderWrapper} from '../../../../layouts/Header';
import {View} from 'react-native';
import styles from '../styles';
import {useSelector} from 'react-redux';
import Button from '../../../../components/Button';
import {IoniconsIcon} from '../../../../assets/icons';

function Header() {
  const currPlayList = useSelector(state => state.player.currPlayList);

  return (
    <HeaderWrapper>
      <View style={styles.headerWrapper}>
        <View style={styles.titleHeaderWrapper}>
          <TextBB numLine={1} style={styles.titleHeaderText}>
            {currPlayList?.title}
          </TextBB>
        </View>
        <Button round={true} underlayColor={true} onPress={() => {}}>
          <View style={styles.buttonWrapper}>
            <IoniconsIcon name="search-outline" size={25} color={color.white} />
          </View>
        </Button>
      </View>
    </HeaderWrapper>
  );
}

export default Header;
