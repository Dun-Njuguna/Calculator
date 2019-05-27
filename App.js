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
  
  constructor(){
    super(),
    this.state = {
      resultText: ""
    }
    this.operations = ["Del",'+','-','*','/'] 
  }

  buttonPressed(text){
    console.log(text)

    if(text == '='){
      return this.validate() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  calculateResult(){
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }
   validate(){
     let text = this.state.resultText
     switch(text.slice(-1)){
       case '+':
       case '-':
       case '*':
       case '/':
          return false
     }
     return true
   }

  operate(operation){
    switch(operation){
      case 'Del':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar) > 0) return
        if(this.state.text = "")return
           this.setState({
            resultText: this.state.resultText + operation
          })
    }
  }

  
  render() {

    //creating buttons for numbers
    let rows = []
    let nums = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[".", 0, "="]]
    for(let i=0; i<4; i++){
      let row = []
      for(let j=0; j<3; j++){
        row.push(<TouchableOpacity key= {nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.button}>
          <Text style={styles.buttonText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key= {nums[i]} style={styles.row}>{row}</View>)
    }

      //creating buttons for operations
      let operation = []
      for(let i=0; i<5; i++){
        operation.push(<TouchableOpacity key={this.operations[i]} style={styles.button} onPress={() => this.operate(this.operations[i])}>
          <Text style={[styles.buttonText, styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>)
      }


    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
    color: 'black'
  },
  calculationText: {
    fontSize: 24,
    color: 'black'
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 30,
    color: 'white'
  },
  white: {
    color: 'white'
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',   
    backgroundColor: '#636363'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
