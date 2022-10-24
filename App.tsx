import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';

export default class App extends Component {
  state={
    display1: 'none',
    buttonText: 'Pokaz',
    pressed: false,
  };

  change(){
    if(!this.state.pressed){
       this.setState({ pressed: true, display1: 'flex', buttonText: 'Ukryj'});
    } else {
      this.setState({ pressed: false, display1: 'none', buttonText: 'Pokaz'});
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Zadanie 2</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={()=>this.change()}
                >
            <Text style={styles.text}>{this.state.buttonText}</Text>
          </TouchableOpacity>

          <View style={{display:this.state.display1, padding: 15}}>
            <Text>Nazywam się</Text>
            <Text style={{fontWeight: "bold"}}>Dawid Pytka</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color:'black'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle:{
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    color: 'black',
    },
});