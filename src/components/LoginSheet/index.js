import {TextB, TextBB} from '../GlobalComponents';
import {View, Text, Image, BackHandler} from 'react-native';
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
} from '../../assets/interfaces';
import {useRef, memo, useMemo, useEffect, useCallback} from 'react';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {LOGIN_METHOD_ITEM} from '../../item/LOGIN_METHOD_ITEM';
import Button from '../Button';
import storage from '../../utils/storage';
import HeaderSheet from '../HeaderSheet';

function LoginSheet() {
  const bottomSheetRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => [SCREEN_HEIGHT - STATUS_BAR_HEIGHT], []);
  const isShow = useSelector(state => state.appState?.isShowLoginSheet);
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
      }
    } else {
      if (bottomSheetRef.current) {
        bottomSheetRef.current.close();
      }
    }
  }, [isShow]);

  const handlePressMethodBtn = useCallback(({method}) => {
    const callback = method?.callback;
    if (callback) {
      callback();
    }
  });

  const handleSheetChanges = value => {
    if (value == -1) {
      backHandlerRef.current?.remove();
    }
  };

  return (
    <BottomSheet
      detached={true}
      index={-1}
      handleIndicatorStyle={{display: 'none'}}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      overDragResistanceFactor={0}
      snapPoints={snapPoints}
      style={[styles.sheetContainer]}
      backgroundStyle={[styles.bgStyle]}
      handleComponent={null}
      onChange={handleSheetChanges}
      backdropComponent={useCallback(props => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...props}
        />
      ))}>
      <LinearGradient
        useAngle={true}
        angle={320}
        colors={gradientGroup.loginSheet}
        style={styles.loginWrapper}>
        <HeaderSheet sheetRef={bottomSheetRef?.current} title="" />
        <View style={styles.logoWrapper}>
          <View style={styles.logoBf}>
            <Image
              style={hardStyle.image}
              source={require('../../assets/imgIcon/translogotext_color.png')}
            />
          </View>
        </View>
        <BottomSheetScrollView
          style={{flex: 1}}
          contentContainerStyle={styles?.loginActionWrapper}>
          {LOGIN_METHOD_ITEM?.map((method, index) => {
            return (
              <Button
                underLayColorHex={color.blackL2}
                underlayColor={true}
                onPress={() => {
                  handlePressMethodBtn({method});
                }}
                key={index}
                style={[
                  styles.loginMethodButton,
                  {backgroundColor: method?.backGroundColor},
                ]}>
                <>
                  <View style={styles.methodIcon}>
                    <Image
                      style={hardStyle.image}
                      source={method?.iconSource}
                    />
                  </View>
                  <View style={styles.btnLoginTextWrapper}>
                    <TextBB
                      numLine={1}
                      style={[
                        styles.btnLoginText,
                        {color: method.textColor || color.mainText},
                      ]}>
                      {method.title}
                    </TextBB>
                  </View>
                </>
              </Button>
            );
          })}
        </BottomSheetScrollView>
        <View style={styles.texConfirmWrapperL1}>
          <View style={styles.texConfirmWrapper}>
            <TextB style={styles.confirmText}>
              Bằng cách tiếp tục, bạn đồng ý với Thoả thuận sử dụng và thừa nhận
              rằng bạn đã đọc chính sách bảo mật của chúng tôi
            </TextB>
          </View>
        </View>
      </LinearGradient>
    </BottomSheet>
  );
}

export default memo(LoginSheet);
