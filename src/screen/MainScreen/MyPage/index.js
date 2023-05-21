import {View, Text} from 'react-native';
import DefaultLayout from '../../../layouts/DefaultLayout';
import {useEffect} from 'react';

function MyPage() {
  useEffect(() => {
    console.log('ok');
  }, []);

  return (
    <DefaultLayout>
      <View>
        <Text>MyPage</Text>
      </View>
    </DefaultLayout>
  );
}

export default MyPage;
