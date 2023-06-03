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
import {SONG_SHEET_ACTION} from '../../item/ACTION';

function SongActionSheet() {
  const bottomSheetRef = useRef();
  const inputRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => ['70%'], []);
  const songSheet = useSelector(state => state.appState?.songActionSheet);

  const songData = songSheet?.songData;
  const playListData = songSheet?.playListData;
  const callbackReturn = songSheet?.callbackReturn;
  const callbackReturnAsync = songSheet?.callbackReturnAsync;

  const handlePressOption = action => {
    const callback = action?.callback;
    closeSheet();
    if (callback) {
      callback({
        song: songData,
        playList: playListData,
        callbackReturn,
        callbackReturnAsync,
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
        if (inputRef?.current) {
          inputRef.current?.focus();
          inputRef.current?.clear();
        }
      }
    } else {
      closeSheet();
    }
  }, [songSheet?.isShow]);

  const handleSheetChanges = value => {
    if (value == -1) {
      backHandlerRef.current?.remove();

      if (inputRef?.current) {
        inputRef.current?.blur();
      }
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
      {songSheet?.songData ? (
        <View style={{paddingTop: 7, ...border.bottom}}>
          <SongItem song={songSheet?.songData} isDisplay={true} />
        </View>
      ) : null}
      <BottomSheetScrollView style={{paddingVertical: 10}}>
        {songSheet?.actions?.map((action, index) => {
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

export default memo(SongActionSheet);
