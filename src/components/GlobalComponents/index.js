import {Text, Animated} from 'react-native';
import styles from './styles';

function TextM({children, ...prop}) {
  return (
    <Text
      style={[styles.textStyleGlobal, prop?.style]}
      numberOfLines={prop.numLine}>
      {children}
    </Text>
  );
}

function TextB({children, ...prop}) {
  return (
    <Text
      style={[styles.textBStyleGlobal, prop?.style]}
      numberOfLines={prop.numLine}>
      {children}
    </Text>
  );
}

function TextBB({children, ...prop}) {
  return (
    <Text
      style={[styles.textBBStyleGlobal, prop?.style]}
      numberOfLines={prop.numLine}>
      {children}
    </Text>
  );
}

function AnimatedTextBB({children, ...prop}) {
  return (
    <Animated.Text
      style={[styles.textBBStyleGlobal, prop?.style]}
      numberOfLines={prop.numLine}>
      {children}
    </Animated.Text>
  );
}

export {TextM, TextB, TextBB, AnimatedTextBB};
