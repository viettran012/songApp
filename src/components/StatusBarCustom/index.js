import {StatusBar, View} from 'react-native';
import {color} from '../../assets/interfaces';
import {STATUS_BAR_HEIGHT} from '../../assets/interfaces';

// console.log(STATUS_BAR_HEIGHT);
function StatusBarCustom() {
  const backgroundColor = color.transparent;
  const BAR_STYLE = 'dark-content';

  return (
    <>
      <View
        style={{
          height: STATUS_BAR_HEIGHT,
          backgroundColor: backgroundColor,
          position: 'absolute',
          width: '100%',
          zIndex: 9999999999,
          elevation: 99999999999,
        }}></View>
      <StatusBar
        translucent
        hidden={false}
        barStyle={BAR_STYLE}
        backgroundColor={color.transparent}
      />
    </>
  );
}
export default StatusBarCustom;
