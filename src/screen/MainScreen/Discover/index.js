import {View, Text} from 'react-native';
import DefaultLayout from '../../../layouts/DefaultLayout';
import {HeaderWrapper} from '../../../layouts/Header';
import styles from './styles';
import Header from './components/Header';
import discoverPageService from '../../../services/discoverPageService';
import {Fragment, useEffect, useState} from 'react';
import Slider from './components/Slider';
import Loader from '../../../components/Loader';
import PlayListUI from './components/PlayListUI';
import ChillListUI from './components/ChillListUI';
import ChartListUI from './components/ChartListUI';
import SingleUI from './components/SingleUI';

const i = 0;

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
            {data?.map((dataUI, index) => {
              if (dataUI?.title == 'Chill') {
                return (
                  <Fragment key={index}>
                    <View>
                      <ChillListUI navigation={navigation} data={dataUI} />
                    </View>
                    <View>
                      <ChartListUI navigation={navigation} />
                    </View>
                  </Fragment>
                );
              }
              // if (index == 5) {
              //   console.log('render chart');
              //   return (
              //     <View key={index}>
              //       <ChartListUI navigation={navigation} />
              //     </View>
              //   );
              // }

              if (dataUI?.sectionType == 'banner') {
                return (
                  <View key={index} style={styles.sliderWrapper}>
                    <Slider navigation={navigation} data_={dataUI} />
                  </View>
                );
              }

              if (dataUI?.sectionType == 'playlist') {
                return (
                  <View key={index}>
                    <PlayListUI navigation={navigation} data={dataUI} />
                  </View>
                );
              }

              return null;
            })}

            {/* <View>
              <ChillListUI navigation={navigation} data={data[3 + i]} />
            </View>
            <View>
              <PlayListUI navigation={navigation} data={data[9 + i]} />
            </View>
            <View>
              <ChartListUI navigation={navigation} />
            </View>

            <View>
              <PlayListUI navigation={navigation} data={data[5 + i]} />
            </View>
            <View>
              <SingleUI navigation={navigation} data={data[2 + i]} />
            </View>
            <View>
              <PlayListUI navigation={navigation} data={data[4 + i]} />
            </View>

            <View>
              <PlayListUI navigation={navigation} data={data[10 + i]} />
            </View>
            <View>
              <PlayListUI navigation={navigation} data={data[11 + i]} />
            </View> */}
          </>
        ) : null}
      </View>
    </DefaultLayout>
  );
}

export default Discover;
