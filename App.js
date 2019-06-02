import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoggedOut from './src/screens/LoggedOut'
import color from './src/color';
import Login from './src/screens/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
