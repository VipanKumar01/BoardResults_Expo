import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import BrowserWindow from './components/BrowserWindow';
import ChooseBoardScreen from './components/ChooseBoardScreen';
import CardBoards from './components/Cards';

export default function App() {
  const reloadData = useCallback(() => {
    // Implement your logic to reload data here
    // For example, you can call an API again or update state variables
    console.log("Data reloaded");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='All Boards'>
        <Stack.Screen name="All Boards" component={CardBoards} />
        <Stack.Screen name="Result" component={BrowserWindow} />
        <Stack.Screen name="Check Result" component={ChooseBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
});
