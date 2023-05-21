import {StyleSheet, Text, View} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import {color} from '../../assets/interfaces';
import {TextB} from '../GlobalComponents';

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
