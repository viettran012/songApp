import {View} from 'react-native';
import styles from '../styles';
import {TextB} from '../../../../components/GlobalComponents';
import Button from '../../../../components/Button';

function AnalystAction({item}) {
  const Icon = item?.icon;

  return (
    <Button
      onPress={item?.callback}
      underlayColor={true}
      style={styles.analystActionWrapper}>
      <>
        <View style={styles.iconAnalystActionWrapper}>{Icon}</View>
        <View style={styles.textAnalystActionWrapper}>
          <TextB>{item?.title}</TextB>
        </View>
      </>
    </Button>
  );
}

export default AnalystAction;
