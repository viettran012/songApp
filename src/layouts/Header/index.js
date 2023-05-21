import {View} from 'react-native';
import {TextBB, TextM} from '../../components/GlobalComponents';
import styles from './styles';
import {EntypoIcon} from '../../assets/icons';
import Button from '../../components/Button';
import {color} from '../../assets/interfaces';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';

function HeaderWrapper({children}) {
  return <View style={styles.headerWrapper}>{children}</View>;
}

function HeaderBack({title}) {
  return (
    <View style={[styles.headerBackWrapper]}>
      <View style={styles.titleHeaderBackWrapper}>
        <TextBB numLine={1} style={styles.titleHeaderText}>
          {title}
        </TextBB>
      </View>
    </View>
  );
}

export {HeaderWrapper, HeaderBack};
