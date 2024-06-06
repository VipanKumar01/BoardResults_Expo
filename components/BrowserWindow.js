import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, ActivityIndicator, View, StyleSheet } from 'react-native';

function BrowserWindow(props) {
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = React.useRef(null);

  // console.log(props.route.params);


  const onLoadStart = () => {
    setIsLoading(true); // Show the loader when the WebView starts loading
  };

  const onLoadEnd = () => {
    setIsLoading(false); // Hide the loader when the WebView finishes loading
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        source={{ uri: props.route.params }}
        style={{ flex: 1 }}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
      />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add some transparency
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BrowserWindow;
