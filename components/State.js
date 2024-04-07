import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const State = () => {
  const [num, setNum]= useState(0)

  const onPress = ()=>{
    setNum(num+1)
  }
  const minum = ()=>{
    setNum(num-1);
  }
  const reset = ()=>{
    setNum(0)
  }

  return (
    <View>
    <Text>{num}</Text>
    <Button title='add one' onPress={onPress}/>
    <Button title='minus one' onPress={minum}/>
    <Button title='reset' onPress={reset}/>
    </View>
  )
}

export default State