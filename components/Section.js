import React from 'react'
import { SectionList, View, Text } from 'react-native'

const Section = () => {
const user= [
{
  id:1,
  name:"dhanraj",
  data:["rust", "c++", "python", "javascript"]
},{
  id:2,
  name:"dhanraj",
  data:["rust", "c++", "python", "javascript"]
},{
  id:3,
  name:"dhanraj",
  data:["rust", "c++", "python", "javascript"]
},{
  id:4,
  name:"dhanraj",
  data:["rust", "c++", "python", "javascript"]
},{
  id:5,
  name:"dhanraj",
  data:["rust", "c++", "python", "javascript","dp"]
},

]


  return (
    <View>
   <Text>SEction list in react</Text>
<SectionList
sections={user}
renderItem={({item})=><Text>{item}</Text>}
renderSectionHeader={({section:{name}})=>(
  <Text>{name}</Text>
  )}

/>


    </View>
  )
}

export default Section