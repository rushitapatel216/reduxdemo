import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Src/Screens/Home';
import store from './Src/Redux/Store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
