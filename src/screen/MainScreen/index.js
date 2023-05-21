import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TABBAR_ITEMS} from '../../item/TABBAR_ITEM';
import TabbarCustom from './components/TabbarCusTom';
import {useEffect} from 'react';
import discoverPageService from '../../services/discoverPageService';
import {useDispatch} from 'react-redux';
import {setCurrPlayList, setCurrSong} from '../../redux/actions/player';
import playListService from '../../services/playListService';
import ListSheet from './Player/components/ListSheet';

const Tab = createBottomTabNavigator();

function MainScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    discoverPageService()
      .then(data => {
        if (data?.result == 1) {
          const id = data?.data?.data?.items[3].items[0].encodeId;
          playListService(id).then(data => {
            dispatch(setCurrPlayList(data?.data?.data));
            dispatch(
              setCurrSong({
                ...data?.data?.data?.song?.items[0],
                notPlay: true,
              }),
            );
          });
        } else {
        }
      })
      .catch(error => {});
  }, []);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Player"
        screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
        tabBar={props => <TabbarCustom {...props} />}>
        {TABBAR_ITEMS.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={item}
            />
          );
        })}
      </Tab.Navigator>
      <ListSheet />
    </>
  );
}

export default MainScreen;
