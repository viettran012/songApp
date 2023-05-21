import {TextBB, TextM, TextB} from '../../../../../components/GlobalComponents';
import {View, ScrollView, Image} from 'react-native';
import Button from '../../../../../components/Button';
import styles from './styles';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {setFocusPlayList} from '../../../../../redux/actions/appState';

function PlayListUI({data, navigation}) {
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
          {data?.items?.map((item, index) => {
            return (
              <Button
                onPress={() => {
                  handleClickPlayList(item);
                }}
                key={index}>
                <View style={[index == 0 ? {marginLeft: 20} : {}]}>
                  <Image
                    source={{
                      uri: item?.thumbnailM,
                    }}
                    style={[styles.playListItemWraper]}></Image>
                  <View style={[styles.playListDesWrapper]}>
                    <TextB numLine={2} style={styles.titleText}>
                      {item?.title}
                    </TextB>
                    <TextM numLine={1} style={styles.titleTextSinger}>
                      {item?.artists
                        ?.map(item => {
                          return `${item?.name}`;
                        })
                        .join(', ')}
                    </TextM>
                  </View>
                </View>
              </Button>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default PlayListUI;
