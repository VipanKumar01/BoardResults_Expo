import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import CardBoards from './components/Cards';
import HomeScreen from './components/Home';
import BrowserWindow from './components/BrowserWindow';
import ChooseBoardScreen from './components/ChooseBoardScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CardBoards'>
        <Stack.Screen name="CardBoards" component={CardBoards} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BrowserWindow" component={BrowserWindow} />
        <Stack.Screen name="ChooseBoardScreen" component={ChooseBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <SafeAreaView style={styles.container}>
//   <CardBoards />
// </SafeAreaView>


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
});
