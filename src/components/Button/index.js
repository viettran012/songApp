import {TouchableOpacity, TouchableHighlight, To} from 'react-native';
import {color} from '../../assets/interfaces';

const roundStyle = {
  borderRadius: 100,
  overflow: 'hidden',
  // backgroundColor: color.blue,
};

function Button({
  children,
  onPress,
  round,
  underlayColor,
  underLayColorHex,
  ...props
}) {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={
        underlayColor
          ? underLayColorHex || color.transparentBlack
          : color?.transparent
      }
      onPress={onPress}
      style={[round ? roundStyle : {}, props.style]}>
      {children}
    </TouchableHighlight>
  );
}

export default Button;
