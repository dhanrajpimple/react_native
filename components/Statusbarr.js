import React from 'react'
import { StatusBar, Text, View } from 'react-native'

const Statusbarr = () => {
  return (
    <View>
      <StatusBar backgroundColor='orange' barStyle={"default"}
      hidden={false} />

      <Text>this is me</Text>
    </View>
  )
}

export default Statusbarr