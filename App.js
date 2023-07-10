import {View, Text, StyleSheet, StatusBar, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  TransitionSpecs,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import {useEffect} from 'react';
import MainScreen from './src/screen/MainScreen';
import PlayListScreen from './src/screen/PlayListSreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import StatusBarCustom from './src/components/StatusBarCustom';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import MusicPlayer from './src/components/MusicPlayer';
import ListSheet from './src/screen/MainScreen/Player/components/ListSheet';
import LoginSheet from './src/components/LoginSheet';
import CreatePlayListSheet from './src/components/CreatePlayListSheet';
import {LoaderMask} from './src/components/Loader';
import Toast from './src/components/Toast';
import prePageData, {preUserData} from './src/utils/prepareData';
import UserPlayListScreen from './src/screen/UserPlayListSreen';
import AddToPlayListSheet from './src/components/AddToPlayListSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SongActionSheet from './src/components/SongActionSheet';
import ConfirmSheet from './src/components/ConfirmSheet';
import PlayListActionSheet from './src/components/PlayListActionSheet';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    prePageData();
    preUserData();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}} edges={['right', 'bottom', 'left']}>
          <GestureHandlerRootView style={{flex: 1}}>
            <StatusBarCustom />
            <LoaderMask />
            <MusicPlayer />
            <Toast />
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="MainScreen"
                screenOptions={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                  headerShown: false,
                }}>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen
                  name="PlayListScreen"
                  component={PlayListScreen}
                />
                <Stack.Screen
                  name="UserPlayListScreen"
                  component={UserPlayListScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>

            <ListSheet />
            <SongActionSheet />
            <PlayListActionSheet />
            <AddToPlayListSheet />
            <CreatePlayListSheet />
            <LoginSheet />
            <ConfirmSheet />
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
