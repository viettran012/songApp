import {View, Image} from 'react-native';
import styles from '../styles';
import {TextB} from '../../../../components/GlobalComponents';
import Button from '../../../../components/Button';
import {hardStyle} from '../../../../assets/interfaces';

function AnalystAction({item}) {
  const Icon = item?.icon;
  const imgPath = item?.iconPath;
  return (
    <Button
      onPress={item?.callback}
      underlayColor={true}
      style={styles.analystActionWrapper}>
      <>
        <View style={styles.iconAnalystActionWrapper}>
          <Image source={imgPath} style={hardStyle.image} />
        </View>
        <View style={styles.textAnalystActionWrapper}>
          <TextB>{item?.title}</TextB>
        </View>
      </>
    </Button>
  );
}

export default AnalystAction;
