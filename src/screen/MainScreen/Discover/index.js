import {View, Text} from 'react-native';
import DefaultLayout from '../../../layouts/DefaultLayout';
import {HeaderWrapper} from '../../../layouts/Header';
import styles from './styles';
import Header from './components/Header';
import discoverPageService from '../../../services/discoverPageService';
import {useEffect, useState} from 'react';
import Slider from './components/Slider';
import Loader from '../../../components/Loader';
import PlayListUI from './components/PlayListUI';
import ChillListUI from './components/ChillListUI';
import ChartListUI from './components/ChartListUI';
import SingleUI from './components/SingleUI';

function Discover({navigation}) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    discoverPageService()
      .then(data => {
        if (data?.result == 1) {
          setData(data?.data?.data?.items);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(error => {
        setIsLoading(false);
      });
  }, []);
  return (
    <DefaultLayout
      isHeaderOpacity={true}
      header={
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      }
      gradient={true}>
      <View style={styles.screenWrapper}>
        {isLoading ? (
          <Loader content="Đang tải" />
        ) : data ? (
          <>
            <View style={styles.sliderWrapper}>
              <Slider navigation={navigation} data={data[0]?.items} />
            </View>
            <View>
              <ChillListUI navigation={navigation} data={data[3]} />
            </View>
            <View>
              <PlayListUI navigation={navigation} data={data[9]} />
            </View>
            <View>
              <ChartListUI navigation={navigation} />
            </View>

            <View>
              <PlayListUI navigation={navigation} data={data[5]} />
            </View>
            <View>
              <SingleUI navigation={navigation} data={data[2]} />
            </View>
            <View>
              <PlayListUI navigation={navigation} data={data[4]} />
            </View>

            <View>
              <PlayListUI navigation={navigation} data={data[10]} />
            </View>
            <View>
              <PlayListUI navigation={navigation} data={data[11]} />
            </View>
          </>
        ) : null}
      </View>
    </DefaultLayout>
  );
}

export default Discover;
