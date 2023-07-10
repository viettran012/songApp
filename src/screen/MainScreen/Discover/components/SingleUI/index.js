import {TextBB, TextM, TextB} from '../../../../../components/GlobalComponents';
import {View, ScrollView, Image, ImageBackground} from 'react-native';
import Button from '../../../../../components/Button';
import styles from './styles';
import chunkArray from '../../../../../utils/chunkArray';
import FastImage from 'react-native-fast-image';

function SingleUI({data}) {
  const items = chunkArray(data?.items?.all, 3);
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
              <View
                key={index}
                style={[
                  index == 0 ? {marginLeft: 20} : {},
                  styles.songAreaWrapper,
                ]}>
                {item.map((item, index) => {
                  return (
                    <Button key={index + 100}>
                      <View key={index} style={styles.songItemWrapper}>
                        <View style={styles.thumbnailSongWrapper}>
                          <FastImage
                            source={{
                              uri: item?.thumbnailM,
                              priority: FastImage.priority.normal,
                            }}
                            style={[styles.thumbnailSong]}
                          />
                        </View>

                        <View style={styles.titleSongWrapper}>
                          <TextBB style={styles.titleText} numLine={1}>
                            {item?.title}
                          </TextBB>
                          <TextB style={styles.singerText}>
                            {item?.artistsNames}
                          </TextB>
                        </View>
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

export default SingleUI;
