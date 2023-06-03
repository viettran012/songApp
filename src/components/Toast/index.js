import {View, StyleSheet} from 'react-native';
import {color, range} from '../../assets/interfaces';
import {TextB} from '../GlobalComponents';
import {useDispatch, useSelector} from 'react-redux';
import appState from '../../redux/reducers/appState';
import {useEffect, useRef} from 'react';
import {setShowToast} from '../../redux/actions/appState';

function Toast() {
  const dispatch = useDispatch();
  const isShowToast = useSelector(state => state?.appState?.isShowToast);
  const showToastTimeOutRef = useRef();

  useEffect(() => {
    clearTimeout(showToastTimeOutRef.current);

    showToastTimeOutRef.current = setTimeout(() => {
      dispatch(setShowToast(false));
    }, isShowToast?.duration || 3000);
  }, [isShowToast]);

  return isShowToast ? (
    <View style={styles.toastWrapper}>
      <View style={styles.toastTextWrapper}>
        <TextB style={styles.toastText}>{isShowToast?.content}</TextB>
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    bottom: range.tabbarHeight + 30,
    zIndex: 9999,
    elevation: 9999,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  toastTextWrapper: {
    backgroundColor: color.blackL1,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  toastText: {
    color: color.white,
  },
});

export default Toast;
