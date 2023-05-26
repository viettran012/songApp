import {View, StyleSheet, ScrollView} from 'react-native';
import {color, gradientGroup, STATUS_BAR_HEIGHT} from '../../assets/interfaces';
import LinearGradient from 'react-native-linear-gradient';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setHeaderOpacity} from '../../redux/actions/appState';
import Button from '../../components/Button';
import {EntypoIcon} from '../../assets/icons';
const maxScrollValue = 300;

function DefaultLayout({
  children,
  header,
  gradient,
  gradientId = 'discover',
  isFullScreen,
  isChangeHeaderOpacity,
  isBackButton,
  navigation,
  scrollPageEvent,
  scrollViewRef,
  rightButton,
  onRightButtonPress,
}) {
  const dispatch = useDispatch();
  const [gradientValue, setGradientValue] = useState(99);
  const [headerOpacity, setHeaderOpacity] = useState(0);

  const goBack = useCallback(() => {
    if (navigation) {
      navigation.goBack();
    }
  }, []);
  const handleScroll = useCallback(event => {
    const scroll = event.nativeEvent.contentOffset.y || 0;
    let value = ((maxScrollValue - scroll) / maxScrollValue) * 99;
    let opacity = (scroll / maxScrollValue) * 1;
    value = Math.floor(value);
    if (value > 99) value = 99;
    if (value < 10 && value > 0) value = `0${value}`;
    if (value <= 0) value = '00';

    opacity = opacity < 0 ? 0 : opacity.toFixed(2);

    setGradientValue(String(value) || '00');
    setHeaderOpacity(Number(opacity));
  }, []);

  return (
    <LinearGradient
      useAngle={true}
      angle={165}
      colors={
        gradient
          ? gradientGroup[gradientId](gradientValue, gradientId)
          : [`${color.transparent}`, `${color.transparent}`]
      }
      style={[styles.layoutStyle]}>
      {isBackButton ? (
        <Button
          underlayColor={true}
          onPress={goBack}
          round={true}
          style={styles.headerIcon}>
          <EntypoIcon
            name="chevron-thin-left"
            size={25}
            color={color.mainText}
          />
        </Button>
      ) : null}

      {rightButton ? (
        <Button
          underlayColor={true}
          onPress={onRightButtonPress}
          round={true}
          style={styles.headerIconRight}>
          {rightButton}
        </Button>
      ) : null}

      <View
        style={[
          styles.headerWrapper,
          {opacity: isChangeHeaderOpacity ? headerOpacity : 1},
        ]}>
        {header}
      </View>
      <View
        style={[
          styles.scrollPage,
          isFullScreen
            ? {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }
            : {},
        ]}>
        <ScrollView
          ref={scrollViewRef}
          pagingEnabled={scrollPageEvent ? true : false}
          // decelerationRate={1}
          onMomentumScrollEnd={scrollPageEvent || (() => {})}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          persistentScrollbar={true}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          onScroll={
            gradient || isChangeHeaderOpacity ? handleScroll : () => {}
          }>
          {children}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    backgroundColor: color.white,
    // paddingTop: STATUS_BAR_HEIGHT,
  },
  scrollPage: {
    flex: 1,

    // backgroundColor: color.black,
  },
  headerIcon: {
    height: 53,
    width: 53,
    // backgroundColor: color.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 5,
    zIndex: 100,
    elevation: 100,
    zIndex: 600,
    elevation: 600,
  },
  headerIconRight: {
    height: 53,
    width: 53,
    // backgroundColor: color.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    right: 5,
    zIndex: 100,
    elevation: 100,
    zIndex: 600,
    elevation: 600,
  },
  headerWrapper: {
    zIndex: 500,
    elevation: 500,
  },
});

export default DefaultLayout;
