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

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}} edges={['right', 'bottom', 'left']}>
          <StatusBarCustom />
          <MusicPlayer />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="MainScreen"
              screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
              }}>
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="PlayListScreen" component={PlayListScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
