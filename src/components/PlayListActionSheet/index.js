import {TextB, TextBB} from '../GlobalComponents';
import {View, Text, TextInput, Image, BackHandler} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  SCREEN_HEIGHT,
} from '@gorhom/bottom-sheet';
import {
  STATUS_BAR_HEIGHT,
  border,
  color,
  gradientGroup,
  hardStyle,
  range,
} from '../../assets/interfaces';
import {useRef, memo, useMemo, useEffect, useCallback} from 'react';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {LOGIN_METHOD_ITEM} from '../../item/LOGIN_METHOD_ITEM';
import Button from '../Button';
import storage from '../../utils/storage';
import {Formik} from 'formik';
import createPlayListService from '../../services/createPlayListService';
import {
  addToPlayListSheet,
  setLoaderMaskShow,
  showCreatePlaylistSheet,
} from '../../redux/actions/appState';
import {showMaskLoader} from '../../utils/showMaskLoader';
import showToast from '../../utils/showToast';
import {createPlaylist} from '../../utils/showSheet';
import HeaderSheet from '../HeaderSheet';
import {preUserData} from '../../utils/prepareData';
import PlayListList from '../../screen/MainScreen/MyPage/components/PlayListList';
import {addToPlaylist} from '../../services/userServices';
import {DrawerLayout} from 'react-native-gesture-handler';
import SongItem from '../../screen/PlayListSreen/components/SongItem';
import {PLAYLIST_ACTION, SONG_SHEET_ACTION} from '../../item/ACTION';

function PlayListActionSheet() {
  const bottomSheetRef = useRef();
  const inputRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => ['70%'], []);
  const songSheet = useSelector(state => state.appState?.playlistActionSheet);
  const playlistData = songSheet?.playListData;

  const handlePressOption = async action => {
    const callback = action?.callback;
    closeSheet();
    if (callback) {
      const fb = await callback({
        playlistData,
        asyncCallback: fb => {
          if (fb?.result == 1) {
            if (songSheet?.navigation) {
              songSheet?.navigation?.goBack();
            }
          }
        },
        callback: () => {},
      });
    }
  };

  const dispatch = useDispatch();
  const closeSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  };
  useEffect(() => {
    if (songSheet?.isShow) {
      backHandlerRef.current = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          bottomSheetRef.current.close();
          return true;
        },
      );

      if (bottomSheetRef.current) {
        bottomSheetRef.current.snapToIndex(0);
      }
    } else {
      closeSheet();
    }
  }, [songSheet?.isShow]);

  const handleSheetChanges = value => {
    if (value == -1) {
      backHandlerRef.current?.remove();
    }
  };

  return (
    <BottomSheet
      index={-1}
      detached={true}
      handleIndicatorStyle={{backgroundColor: color.mainTextL2}}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      overDragResistanceFactor={0}
      snapPoints={snapPoints}
      style={[styles.sheetContainer]}
      backgroundStyle={[styles.bgStyle]}
      // handleComponent={null}
      onChange={handleSheetChanges}
      backdropComponent={useCallback(props => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...props}
        />
      ))}>
      {songSheet?.playListData ? (
        <View style={styles.playlistItemW}>
          <View style={styles.playlistThumbWrappper}>
            <Image
              source={{
                uri: playlistData?.thumbnailM,
              }}
              style={hardStyle.image}
            />
          </View>
          <View>
            <TextBB style={styles.playlistTitleText}>
              {playlistData?.title}
            </TextBB>
            <TextB>{playlistData?.song?.items?.length} bài hát</TextB>
          </View>
        </View>
      ) : null}
      <BottomSheetScrollView style={{paddingVertical: 10}}>
        {PLAYLIST_ACTION?.filter(
          action => action?.ignoreId != playlistData?.encodeId,
        )?.map((action, index) => {
          const IconLib = action?.iconLib;
          return (
            <Button
              onPress={() => {
                handlePressOption(action);
              }}
              key={index}
              style={styles?.actionItemWrapper}>
              <>
                <View style={styles?.iconWrapper}>
                  <IconLib
                    name={action?.iconName}
                    size={action?.iconSize}
                    color={color.mainText}
                  />
                </View>
                <View style={styles.actionTitleWrapper}>
                  <TextB style={styles.actionTitle}>{action?.title}</TextB>
                </View>
              </>
            </Button>
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export default memo(PlayListActionSheet);
