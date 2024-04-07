import React from 'react'
import { FlatList, View,Text } from 'react-native'

const List = () => {
  const user = [
    {
      id:1,
      name:"dp"
    },
    {
      id:1,
      name:"dhanraj"
    },
    {
      id:3,
      name:"pimple"
    },
    {
      id:4,
      name:"dhanrajpimple"
    }
  ]
  return (
   <View>
    <Text>this is the flat list</Text>
     
     <FlatList
     data={user}
     renderItem={({item})=><Text>{item.name}</Text>}
     keyExtractor={(item)=>item.id}
     />

   </View>
  )
}

export default List