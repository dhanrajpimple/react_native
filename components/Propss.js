import React from 'react'
import { Text, View } from 'react-native'

const Propss = (props) => {
  const data= props.name;
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default Propss