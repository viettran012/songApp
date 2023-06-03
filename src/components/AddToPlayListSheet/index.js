import {TextB, TextBB} from '../GlobalComponents';
import {View, Text, TextInput, Image, BackHandler} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  SCREEN_HEIGHT,
} from '@gorhom/bottom-sheet';
import {
  STATUS_BAR_HEIGHT,
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

function AddToPlayListSheet() {
  const bottomSheetRef = useRef();
  const inputRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => [SCREEN_HEIGHT - STATUS_BAR_HEIGHT], []);
  const addToPlayListSheetState = useSelector(
    state => state.appState?.addToPlayListSheet,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (addToPlayListSheetState?.isShow) {
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
      if (bottomSheetRef.current) {
        bottomSheetRef.current.close();
      }
    }
  }, [addToPlayListSheetState?.isShow]);

  const handleSheetChanges = value => {
    if (value == -1) {
      backHandlerRef.current?.remove();

      if (inputRef?.current) {
        inputRef.current?.blur();
      }
    }
  };

  const handlePlaylistPicker = playList => {
    const playlistId = playList?.encodeId;
    const song = addToPlayListSheetState?.songData;
    if (song && playlistId) {
      dispatch(addToPlayListSheet({isShow: false}));
      addToPlaylist({...song, playlistId})
        .then(fb => {
          if (fb.result == 1) {
            showToast({
              content: 'Đã thêm 1 bài hát vào playlist',
              duration: 2000,
            });
            preUserData();
          } else {
            showToast({content: 'Không thể thêm vào playlist', duration: 2000});
          }
        })
        .catch(error => {
          showToast({content: 'Không thể thêm vào playlist', duration: 2000});
        });
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
      <HeaderSheet
        sheetRef={bottomSheetRef?.current}
        title="Thêm vào playlist"
      />
      <TextB style={{color: color?.mainTextL1, padding: 15}}>
        Chọn playlist để thêm bài hát vào
      </TextB>
      <BottomSheetScrollView>
        <PlayListList isPicker={{callback: handlePlaylistPicker}} />
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export default memo(AddToPlayListSheet);
