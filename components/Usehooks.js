import React, { useEffect, useState } from 'react'
import { Button, View,Text } from 'react-native'

const Usehooks = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.warn("hellow")
  },[count])

return (
  <View>
    <Text>
      life cycle with use effect {count}
    </Text>
    <Button onPress={() =>setCount(count+1)} title='add one'/>
  </View>
  )
}

export default Usehooks