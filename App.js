/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


export default class App extends Component {
  render() {

    //creating buttons for numbers
    let rows = []
    let nums = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[0, 0, "="]]
    for(let i=0; i<4; i++){
      let row = []
      for(let j=0; j<3; j++){
        row.push(<TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

      //creating buttons for operations
      let operation = []
      let operations = ['+','-','*','/'] 
      for(let i=0; i<4; i++){
        operation.push(<TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, styles.white]}>{operations[i]}</Text>
        </TouchableOpacity>)
      }


    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
              {rows}
          </View>
          <View style={styles.operations}>
              {operation}
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 30
  },
  white: {
    color: 'white'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',   
    backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
