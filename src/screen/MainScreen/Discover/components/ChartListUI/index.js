import {TextBB, TextM, TextB} from '../../../../../components/GlobalComponents';
import {View, ScrollView, Image} from 'react-native';
import Button from '../../../../../components/Button';
import styles from './styles';
import homeChartService from '../../../../../services/homeChartService';
import {useState, useEffect} from 'react';
import Loader from '../../../../../components/Loader';
import ChartUI from './components/ChartUi';

function ChartListUI({navigation}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    homeChartService()
      .then(data => {
        if (data?.result == 1) {
          const chartData = Object.values(data?.data?.data?.weekChart);
          const mainData = [
            {
              ...chartData[0],
              c_title: 'Việt Nam',
              cc_title: 'BXH Tuần - Việt Nam',
            },
            {...chartData[1], c_title: 'US-UK', cc_title: 'BXH Tuần - US-UK'},
            {...chartData[2], c_title: 'K-Pop', cc_title: 'BXH Tuần - K-Pop'},
          ];
          setData(mainData);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(eror => {
        setLoading(false);
      });
  }, []);
  return loading ? (
    <Loader content="Đang tải bảng xếp hạng" />
  ) : (
    <View style={styles.playListWrapper}>
      <View style={styles.playListTitleWrapper}>
        <TextBB style={styles.playListTitle}>Bảng xếp hạng</TextBB>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.playlistScrollView}>
          {data?.map((item, index) => {
            return (
              <ChartUI
                navigation={navigation}
                key={index}
                data={item}
                index={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default ChartListUI;
