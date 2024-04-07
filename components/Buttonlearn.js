import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const Buttonlearn = () => {
 const [num, setNum] = useState(0);
  const fruit = (val = "dhanra") => {
    setNum(prevNum => prevNum + 1);
    console.warn(val);
}
  return (
  <View>
   <Text>
    this is the text type by me
   </Text>
   <Text>{num}</Text>
<Button title='onprress' color={'red'} onPress={fruit}/>
<Button title='onprress' color={'red'} onPress={()=>fruit("dhanraj pimple calling")}/>


  </View>
  )
}

export default Buttonlearn