import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';

function BrowserWindow(props) {
  console.log(props.route.params);
  // take url as props and set in uri

  // and  handle navigation state changes to update the title of the window.
  return (
    <WebView
      source={{ uri: props.route.params }}
      style={{ flex: 1 }}
    />
  );
}

export default BrowserWindow;
