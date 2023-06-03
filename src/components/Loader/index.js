import {StyleSheet, Text, View} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import {color} from '../../assets/interfaces';
import {TextB} from '../GlobalComponents';
import {useSelector} from 'react-redux';

function LoaderMask({
  size_ = 15,
  backgroundColor = color.transparentBlackL,
  color_ = color.blue,
  content = '',
  contentStyle,
}) {
  const isLoaderMaskShow = useSelector(
    state => state?.appState?.isLoaderMaskShow,
  );
  return isLoaderMaskShow ? (
    <View
      style={[styles.loaderWrapperMask, {backgroundColor: backgroundColor}]}>
      <View style={styles.loaderMaskWrapperL}>
        <View>
          <MaterialIndicator
            animationDuration={3000}
            size={size_}
            color={color_}></MaterialIndicator>
        </View>

        <TextB style={[styles.contentText, {...contentStyle}]}>
          {isLoaderMaskShow?.content || 'Đang tải'}
        </TextB>
      </View>
    </View>
  ) : null;
}

function Loader({
  size_ = 15,
  backgroundColor = color.transparent,
  color_ = color.blue,
  content = '',
  contentStyle,
}) {
  return (
    <View style={[styles.loaderWrapper, {backgroundColor: backgroundColor}]}>
      <View style={styles.loader}>
        <MaterialIndicator
          animationDuration={3000}
          count={5}
          size={size_}
          color={color_}></MaterialIndicator>
      </View>
      {content && (
        <TextB style={[styles.contentText, {...contentStyle}]}>{content}</TextB>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loaderMaskWrapperL: {
    backgroundColor: color.white,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  loaderWrapperMask: {
    position: 'absolute',
    flex: 1,
    paddingVertical: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 9999,
    elevation: 9999,
    backgroundColor: color.white,
  },
  loader: {
    // height: 20,
    // backgroundColor: color.warning,
  },
  loaderWrapper: {
    // position: 'absolute',
    flex: 1,
    paddingVertical: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    // backgroundColor: color.blue,
  },
  contentText: {
    // color: color.blue,
    // marginTop: 7,
    textAlign: 'center',
    marginLeft: 5,
  },
});

export default Loader;
export {LoaderMask};
