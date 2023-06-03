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
  const inputRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => [SCREEN_HEIGHT - STATUS_BAR_HEIGHT], []);
  const isShow = useSelector(
    state => state.appState?.isShowCreatePlaylistSheet,
  );
  const dispatch = useDispatch();
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
  }, [isShow]);

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
      <BottomSheetScrollView>
        <Formik
          initialValues={{title: ''}}
          onSubmit={values => {
            if (!values?.title) {
              return showToast({
                content: 'Chưa nhập tên Playlist',
                duration: 3000,
              });
            }
            showMaskLoader({
              isShow: true,
              content: 'Đang tạo Playlist',
            });
            const timeOut = setTimeout(() => {
              showMaskLoader(false);
              showToast({content: 'Không có kết nối mạng !', duration: 3000});
            }, 10000);
            createPlayListService(values)
              .then(async data => {
                clearTimeout(timeOut);
                createPlaylist({hidden: true});
                if (data?.result == 1) {
                  await preUserData();
                  showMaskLoader(false);
                  showToast({content: 'Đã tạo 1 Playlist', duration: 3000});
                }
                if (data?.result == 0) {
                  showMaskLoader(false);
                  showToast({content: 'Tạo thất bại', duration: 3000});
                }
              })
              .catch(error => {
                clearTimeout(timeOut);
                showMaskLoader(false);
                showToast({content: 'Tạo thất bại', duration: 3000});
              });
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.wrapper}>
              <HeaderSheet
                sheetRef={bottomSheetRef?.current}
                title="Tạo playlist mới"
              />
              <TextInput
                ref={inputRef}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                style={styles.input}
                placeholder={'Nhập tên Playlist'}
                placeholderTextColor={color?.mainTextL1}
              />
              <Button
                onPress={handleSubmit}
                style={styles.submitBtn}
                underlayColor={true}
                underLayColorHex={color.blue}>
                <TextB style={styles.submitText}>Tạo playlist</TextB>
              </Button>
            </View>
          )}
        </Formik>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export default memo(CreatePlayListSheet);
