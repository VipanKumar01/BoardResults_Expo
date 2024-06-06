import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerComponent from './components/Drawer';
import CardBoards from './components/Cards';
import BrowserWindow from './components/BrowserWindow';
import ChooseBoardScreen from './components/ChooseBoardScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);

  const reloadWebView = () => {
    // console.log('Reloading WebView');
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  const goBack = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  const goForward = () => {
    if (webViewRef.current && canGoForward) {
      webViewRef.current.goForward();
    }
  };

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <Drawer.Screen name="About" component={DrawerComponent} /> */}
        <Stack.Navigator initialRouteName='All Boards'>
          <Stack.Screen name="All Boards" component={CardBoards} />
          <Stack.Screen name="Result" component={BrowserWindow} />
          <Stack.Screen name="Check Result" component={ChooseBoardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    marginRight: 10, // Adjust the padding or margin as needed
  },
  button: {
    marginLeft: 10, // Adjust the padding or margin as needed
  },
});
