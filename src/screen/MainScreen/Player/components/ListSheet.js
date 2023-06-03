import {TextB} from '../../../../components/GlobalComponents';
import {View, BackHandler} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {color, range} from '../../../../assets/interfaces';
import {useRef, memo, useMemo, useEffect, useCallback} from 'react';
import styles from '../styles';
import {useSelector, useDispatch} from 'react-redux';
import {showListSheet} from '../../../../redux/actions/player';
import {PlayListScreenListSheet} from '../../../PlayListSreen';
import Option from './Option';

function ListSheet() {
  const bottomSheetRef = useRef();
  const backHandlerRef = useRef();
  const snapPoints = useMemo(() => ['60%'], []);
  const isShow = useSelector(state => state.player?.isShowListSheet);
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

  const handleSheetChanges = value => {
    if (value == -1) {
      backHandlerRef.current?.remove();
    }
  };

  return (
    <BottomSheet
      detached={true}
      index={-1}
      handleIndicatorStyle={{backgroundColor: color.mainTextL3}}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      overDragResistanceFactor={0}
      snapPoints={snapPoints}
      style={[styles.sheetContainer]}
      backgroundStyle={[styles.bgStyle]}
      onChange={handleSheetChanges}
      backdropComponent={props => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...props}
        />
      )}>
      <Option />
      <BottomSheetScrollView
        contentContainerStyle={{
          backgroundColor: color.white,
          paddingVertical: 20,
        }}>
        <PlayListScreenListSheet />
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export default memo(ListSheet);
