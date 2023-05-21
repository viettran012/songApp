import {View, Text, TouchableOpacity} from 'react-native';
import {TextM} from '../../../../components/GlobalComponents';
import Button from '../../../../components/Button';
// import Text from
import styles from './styles';
import {color, gradientGroup} from '../../../../assets/interfaces';
import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IoniconsIcon} from '../../../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import {setIsPlaying} from '../../../../redux/actions/player';
import CurrSongUI from '../../../../components/CurrSongUI';

function TabbarCustom({state, descriptors, navigation}) {
  const dispatch = useDispatch();
  const isPlayerPage = useSelector(state => state.appState.isPlayerPage);
  const isPlaying = useSelector(state => state.player.isPlaying);
  // console.log(isPlaying);

  const handleNavigation = useCallback(options => {
    if (options?.name) {
      navigation?.navigate(options?.name);
    }
  });

  return (
    <View
      style={[
        styles.tabWrapper,
        isPlayerPage
          ? {backgroundColor: color.transparent, position: 'absolute'}
          : {backgroundColor: color.gray},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocus = state?.index == index;

        const Icon = options.Icon;
        const FocusIcon = options.FocusIcon;

        if (options.name == 'Player') {
          if (isPlayerPage) {
            if (!isPlaying) {
              return (
                <View key={index} style={styles.actionWrapperIcon}>
                  <Button
                    onPress={() => {
                      dispatch(setIsPlaying(true));
                    }}
                    round={true}>
                    <LinearGradient
                      useAngle={true}
                      angle={45}
                      colors={gradientGroup.mainL}
                      style={styles.btnActionWrapper}>
                      <IoniconsIcon
                        name="play"
                        color={color.white}
                        size={30}></IoniconsIcon>
                    </LinearGradient>
                  </Button>
                </View>
              );
            } else {
              return (
                <View key={index} style={styles.actionWrapperIcon}>
                  <Button
                    onPress={() => {
                      dispatch(setIsPlaying(false));
                    }}
                    round={true}>
                    <LinearGradient
                      useAngle={true}
                      angle={45}
                      colors={gradientGroup.mainL}
                      style={styles.btnActionWrapper}>
                      <IoniconsIcon
                        name="pause"
                        color={color.white}
                        size={30}></IoniconsIcon>
                    </LinearGradient>
                  </Button>
                </View>
              );
            }
          } else {
            return (
              <View key={index} style={styles.actionWrapperIcon}>
                <Button
                  onPress={() => {
                    handleNavigation(options);
                  }}
                  round={true}>
                  <CurrSongUI />
                </Button>
              </View>
            );
          }
        }

        return (
          <Button
            onPress={() => handleNavigation(options)}
            key={index}
            style={[styles.optionWrapper]}>
            <>
              <View>{isFocus ? FocusIcon : Icon}</View>
              <TextM style={[styles.optionLabel]}>{options?.label}</TextM>
            </>
          </Button>
        );
      })}
    </View>
  );
}

export default TabbarCustom;
