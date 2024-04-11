import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Pressble = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={sty.txt}>{count}</Text>
      <Pressable 
      delayLongPress={0}
       onPress={()=>{setCount(count+1)}}
       onLongPress={()=>{setCount(count+1)}}
        onPressIn={()=>{setCount(count+1)}}
        onPressOut={()=>{setCount(count+1)}}
      >
        <Text style={sty.btn}>this is txt</Text>
      </Pressable>
    </View>
  )
}
const sty = StyleSheet.create({



  btn:{
    backgroundColor:"blue",
    color:"white",
    textAlign:"center",
    height:30,
    textAlignVertical:'center',
    fontWeight:'bold'
  },
  txt:{
    textAlign:"center",
    fontSize:15,
    fontWeight:'bold',

  }
})
export default Pressble