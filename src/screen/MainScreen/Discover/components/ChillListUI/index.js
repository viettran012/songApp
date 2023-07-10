import {TextBB, TextM, TextB} from '../../../../../components/GlobalComponents';
import {View, ScrollView, Image, ImageBackground} from 'react-native';
import Button from '../../../../../components/Button';
import styles from './styles';
import chunkArray from '../../../../../utils/chunkArray';
import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {setFocusPlayList} from '../../../../../redux/actions/appState';
import FastImage from 'react-native-fast-image';

function ChillListUI({data, navigation}) {
  const items = chunkArray(data?.items, 2);
  const dispatch = useDispatch();
  const handleClickPlayList = useCallback(item => {
    if (navigation && item) {
      dispatch(setFocusPlayList(item));
      navigation.navigate('PlayListScreen');
    }
  }, []);

  return (
    <View style={styles.playListWrapper}>
      <View style={styles.playListTitleWrapper}>
        <TextBB style={styles.playListTitle}>{data?.title}</TextBB>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.playlistScrollView}>
          {items?.map((item, index) => {
            return (
              <View key={index} style={[index == 0 ? {marginLeft: 20} : {}]}>
                {item.map((item, index) => {
                  return (
                    <Button
                      key={index + 100}
                      onPress={() => {
                        handleClickPlayList(item);
                      }}>
                      <View>
                        <ImageBackground
                          source={{
                            uri: item?.thumbnailM,
                          }}
                          style={[styles.playListItemWraper]}>
                          <View style={[styles.playListDesWrapper]}>
                            <TextBB numLine={2} style={styles.titleText}>
                              {item?.title}
                            </TextBB>
                            <TextM numLine={1} style={styles.titleTextSinger}>
                              {item?.artists?.map(item => {
                                return `${item?.name}, `;
                              })}
                              ...
                            </TextM>
                          </View>
                        </ImageBackground>
                      </View>
                    </Button>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default ChillListUI;
