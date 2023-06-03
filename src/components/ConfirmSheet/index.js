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
  setLoaderMaskShow,
  showCreatePlaylistSheet,
} from '../../redux/actions/appState';
import {showMaskLoader} from '../../utils/showMaskLoader';
import showToast from '../../utils/showToast';
import {createPlaylist} from '../../utils/showSheet';
import HeaderSheet from '../HeaderSheet';
import {preUserData} from '../../utils/prepareData';

function CreatePlayListSheet() {
  const bottomSheetRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => [300], []);
  const confirmSheet = useSelector(state => state.appState?.confirmSheet);
  const isShow = confirmSheet?.isShow;
  const callback = confirmSheet?.callback;
  const title = confirmSheet?.title;
  const confirmText = confirmSheet?.confirmText;
  const cancelText = confirmSheet?.cancelText;
  const subTitle = confirmSheet?.subTitle;
  const dispatch = useDispatch();
  const handleConfirm = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
    if (callback) {
      callback();
    }
  };
  useEffect(() => {
    if (isShow) {
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
      if (bottomSheetRef.current) {
        bottomSheetRef.current.close();
      }
    }
  }, [isShow]);

  const handleSheetChanges = value => {
    if (value == -1) {
      backHandlerRef.current?.remove();
    }
  };

  return (
    <BottomSheet
      index={-1}
      detached={true}
      handleIndicatorStyle={{backgroundColor: color.white}}
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
      <HeaderSheet title={title} hideCloseBtn={true} />
      {subTitle ? (
        <View style={styles.subTitleWrapper}>
          <TextB numLine={2} style={styles.subTitleText}>
            {subTitle}
          </TextB>
        </View>
      ) : null}
      <BottomSheetScrollView>
        <View style={styles.actionWrapper}>
          <Button
            onPress={handleConfirm}
            style={[styles.actionBtn, {backgroundColor: color.blueL}]}>
            <TextB style={[styles?.textAction, {color: color.white}]}>
              {confirmText}
            </TextB>
          </Button>
          <Button
            onPress={() => {
              if (bottomSheetRef.current) {
                bottomSheetRef.current.close();
              }
            }}
            style={[styles.actionBtn, {backgroundColor: color.gray600}]}>
            <TextB style={[styles?.textAction, {color: color.mainText}]}>
              {cancelText}
            </TextB>
          </Button>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export default memo(CreatePlayListSheet);
