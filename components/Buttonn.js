import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const Buttonn = () => {
  return (
    <View style={style.main}>
    <TouchableHighlight>
      <Text style={style.button}>this is first</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={style.button}>2</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={style.button}>3</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={style.button}>4</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={style.button}>5</Text>
    </TouchableHighlight>


    </View>
  )
}

const style = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:"green",
    color:"black",
    margin:10,
    padding:20,
    textAlign:'center',
    borderRadius:10,
    shadowColor:'black',
    fontSize:24,
    elevation:10,
    opacity:1
  }

})

export default Buttonn