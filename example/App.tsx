/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SimpleEmoji from 'simple-react-native-emoji';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.balck : Colors.white,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            flex: 1,
            backgroundColor: backgroundStyle.backgroundColor,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <SimpleEmoji shortName={":star-struck:"} style={{ fontSize: 30 }} />
          <SimpleEmoji shortName={"sushi"} style={{ fontSize: 30 }} />
        </View>
    </SafeAreaView>
  );
};

export default App;
