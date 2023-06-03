import {View} from 'react-native';
import styles from '../styles';
import {AntDesignIcon, IoniconsIcon} from '../../../../assets/icons';
import {color, gradientGroup, hardStyle} from '../../../../assets/interfaces';
import {TextB} from '../../../../components/GlobalComponents';
import Button from '../../../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import loginCallback from '../../../../utils/loginCallback';
import {showListSheet} from '../../../../redux/actions/player';
import showLoginMethod from '../../../../utils/showLoginMethod';
import {createPlaylist} from '../../../../utils/showSheet';
import {useSelector} from 'react-redux';
import {Image} from 'react-native-animatable';
import {useCallback} from 'react';

function PlayListItem({navigation, isPicker}) {
  const playlistData = useSelector(
    state => state?.user?.initData?.playListData,
  );
  const handlePress = useCallback(({playList}) => {
    if (isPicker) {
      return loginCallback(() => {
        if (isPicker?.callback) {
          isPicker?.callback(playList);
        }
      });
    }
    loginCallback(() => {
      navigation?.navigate('UserPlayListScreen', {
        playList: playList,
      });
    });
  });
  return playlistData?.map((playList, index) => {
    return (
      <Button
        key={playList?.encodeId}
        underlayColor={true}
        underLayColorHex={color.grayE}
        style={styles.playListItemAddWrapper}
        onPress={() => {
          handlePress({playList});
        }}>
        <>
          <View style={styles.iconImagePlayListWrapper}>
            {playList?.song?.items?.map((song, index) => {
              if (index < 4)
                return (
                  <View key={index} style={styles.songImgIconSmall}>
                    <Image
                      source={{
                        uri: song?.thumbnailM,
                      }}
                      style={hardStyle.image}
                    />
                  </View>
                );
              return null;
            })}
          </View>
          <View>
            <TextB numLine={1} style={styles.playListText}>
              {playList?.title}
            </TextB>
            <TextB style={styles.playListDesText}>
              {`${playList?.song?.items?.length} bài hát`}
            </TextB>
          </View>
        </>
      </Button>
    );
  });
}

function PlayListItemAdd() {
  return (
    <Button
      underlayColor={true}
      underLayColorHex={color.grayE}
      style={styles.playListItemAddWrapper}
      onPress={() => {
        loginCallback(userInfo => {
          createPlaylist();
        });
      }}>
      <>
        <View style={styles.addIconWrapper}>
          <AntDesignIcon name="plus" size={30} color={color.mainTextL1} />
        </View>
        <View>
          <TextB style={styles.playListText}>Tạo Playlist</TextB>
          <TextB style={styles.playListDesText}>
            Tạo playlist của riêng bạn
          </TextB>
        </View>
      </>
    </Button>
  );
}

function PlayListItemFavorite({navigation}) {
  const playList = useSelector(state => state.user?.initData?.favoriteList);
  return (
    <Button
      underlayColor={true}
      underLayColorHex={color.grayE}
      style={styles.playListItemAddWrapper}
      onPress={() => {
        loginCallback(() => {
          navigation?.navigate('UserPlayListScreen', {
            playListId: 'favoriteList',
          });
        });
      }}>
      <>
        <LinearGradient
          colors={gradientGroup.heart}
          style={styles.addIconWrapper}>
          <IoniconsIcon name="heart" size={35} color={color.white} />
        </LinearGradient>
        <View>
          <TextB style={styles.playListText}>Yêu thích</TextB>
          <TextB style={styles.playListDesText}>
            {playList?.song?.items?.length
              ? `${playList?.song?.items?.length} bài hát`
              : 'Danh sách bài hát bạn đã thích'}
          </TextB>
        </View>
      </>
    </Button>
  );
}

export {PlayListItemAdd, PlayListItem, PlayListItemFavorite};
