import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import Cycle from './Cycle';

const Life = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
    <Text>this is life cycle</Text>
  <Button title='check out' onPress={()=>setShow(!show)}/>
    {
      show ? <Cycle/>:null
    }
    </View>
  )
}

export default Life