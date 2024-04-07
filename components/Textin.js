import React,{useState, useRef} from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const Textin = () => {
  const inputref = useRef(null)
  const [Name, setName] = useState('');
  const press = ()=>{
    setName('');
 
  }
  return (
    <View>
      <Text>Handle text Input</Text>
      <TextInput
      value={Name}
      placeholder='enter your name'
      onChangeText={(text) => { setName(text) }}/>
    <Button title='reset' onPress={press}/>
      <Text>your name is: {Name}</Text>
    </View>
  )
}

export default Textin