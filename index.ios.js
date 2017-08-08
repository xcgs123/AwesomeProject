/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Navigator } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomePage from './src/containers/Home.js';

export default class AwesomeProject extends Component {
  render() {
    let defaultName = 'HomePage';
    let defaultComponent = HomePage;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      configureScene={(route) => {
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
      }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
