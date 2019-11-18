/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, NativeModules } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HelloManager = NativeModules.HelloManager;

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      greeting : null
    }
  }

  componentDidMount(){

  }

  changeState = (value) => {
    this.setState({
      greeting : value
    });
  }
  render() {
    return (
      <View style={styles.container}>

        {this.state.greeting && (
          <View>
            <Text>{this.state.greeting}</Text>
          </View>
        )}

        <Button 
          title="Press this button"
          onPress={ () => {
            HelloManager.greetUser("EDI", this.changeState);
          }}
        
        />

        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
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
