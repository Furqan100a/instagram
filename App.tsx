import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { RootNavigator} from './src/navigation';
import {color} from './src/theme';
import {globalStyles} from './src/theme/styles';

const App = () => {
  
  return (
    <SafeAreaView style={globalStyles.fillAll}>
      <StatusBar backgroundColor={color.palette.white} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <RootNavigator />
      </View>
    </SafeAreaView>
  );
};
export default App;
