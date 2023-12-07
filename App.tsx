/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import FilePicker from './src/example/FilePicker.tsx';

const App = () => {
  return (
    <View style={styles.container}>
      <FilePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
