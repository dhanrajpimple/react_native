import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const hide = () => {
    setShow(false);
    setEmail('');
    setPassword('');
    setName('');
  }

  return (
    <View>
      <Text>Enter the name</Text>
      <TextInput
        placeholder='Enter the name'
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>Enter the email</Text>
      <TextInput
        placeholder='Enter the email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Enter the password</Text>
      <TextInput
        placeholder='Enter the password'
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View>
        <Button title='Show the information' onPress={() => setShow(true)} />
        <Button title='Hide the information' onPress={hide} />
      </View>
      {
        show ?
          <View>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          </View>
          : null
      }
    </View>
  )
}

export default Form
