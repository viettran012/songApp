import {View, Text, Image} from 'react-native';
import DefaultLayout from '../../../layouts/DefaultLayout';
import {useEffect, useState} from 'react';
import styles from './styles';
import {HeaderBack} from '../../../layouts/Header';
import {FeatherIcon, IoniconsIcon} from '../../../assets/icons';
import {color} from '../../../assets/interfaces';
import {TextB, TextBB} from '../../../components/GlobalComponents';
import Button from '../../../components/Button';
import AnalystAction from './components/analytAction';
import {USER_ANALYST_ACTION_ITEMS} from '../../../item/USER_ANALYST_ACTION_ITEMS';
import {showLoginSheet} from '../../../redux/actions/appState';
import {useDispatch} from 'react-redux';
import UserInfo from './components/UserInfo';
import PlayListList from './components/PlayListList';

function MyPage({navigation}) {
  return (
    <DefaultLayout
      rightButton={
        <IoniconsIcon
          size={25}
          color={color.mainText}
          name="settings-outline"
        />
      }
      onRightButtonPress={() => {
        console.log('setting');
      }}
      isHeaderOpacity={true}
      gradient={true}
      gradientId={'user'}
      isChangeHeaderOpacity={true}
      header={<HeaderBack title={'Tài khoản'} />}>
      <View style={styles.pageWrapper}>
        <UserInfo />
        <View style={styles.analystArea}>
          <View style={styles.sectionTitleWrapper}>
            <TextBB style={styles.sectionTitle}>Thư viện</TextBB>
          </View>
          <View style={styles.analystActionList}>
            {USER_ANALYST_ACTION_ITEMS.map((item, index) => {
              return <AnalystAction key={index} item={item} />;
            })}
          </View>
        </View>

        <View style={styles.playListArea}>
          <View style={styles.sectionTitleWrapper}>
            <TextBB style={styles.sectionTitle}>PlayList của tui</TextBB>
          </View>
          <PlayListList navigation={navigation} />
        </View>
        <View style={styles.settingArea}></View>
      </View>
    </DefaultLayout>
  );
}

export default MyPage;
