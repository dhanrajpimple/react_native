import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Grid = () => {
  const user =  [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Charlie"},
    {"id": 4, "name": "David"},
    {"id": 5, "name": "Emma"},
    {"id": 6, "name": "Frank"},
    {"id": 7, "name": "Grace"},
    {"id": 8, "name": "Henry"},
    {"id": 9, "name": "Ivy"},
    {"id": 10, "name": "Jack"},
    {"id": 11, "name": "Alice"},
    {"id": 12, "name": "Bob"},
    {"id": 13, "name": "Charlie"},
    {"id": 14, "name": "David"},
    {"id": 15, "name": "Emma"},
    {"id": 16, "name": "Frank"},
    {"id": 17, "name": "Grace"},
    {"id": 18, "name": "Henry"},
    {"id": 19, "name": "Ivy"},
    {"id": 20, "name": "Jack"},
    {"id": 21, "name": "Alice"},
    {"id": 22, "name": "Bob"},
    {"id": 23, "name": "Charlie"},
    {"id": 24, "name": "David"},
    {"id": 25, "name": "Emma"},
    {"id": 26, "name": "Frank"},
    {"id": 27, "name": "Grace"},
    {"id": 28, "name": "Henry"},
    {"id": 29, "name": "Ivy"},
    {"id": 30, "name": "Jack"},
    {"id": 31, "name": "Alice"},
    {"id": 32, "name": "Bob"},
    {"id": 33, "name": "Charlie"},
    {"id": 34, "name": "David"},
    {"id": 35, "name": "Emma"},
    {"id": 36, "name": "Frank"},
    {"id": 37, "name": "Grace"},
    {"id": 38, "name": "Henry"},
    {"id": 39, "name": "Ivy"},
    {"id": 40, "name": "Jack"},
    {"id": 41, "name": "Alice"},
    {"id": 42, "name": "Bob"},
    {"id": 43, "name": "Charlie"},
    {"id": 44, "name": "David"},
    {"id": 45, "name": "Emma"},
    {"id": 46, "name": "Frank"},
    {"id": 47, "name": "Grace"},
    {"id": 48, "name": "Henry"},
    {"id": 49, "name": "Ivy"},
    {"id": 50, "name": "Jack"},
    {"id": 51, "name": "Alice"},
    {"id": 52, "name": "Bob"},
    {"id": 53, "name": "Charlie"},
    {"id": 54, "name": "David"},
    {"id": 55, "name": "Emma"},
    {"id": 56, "name": "Frank"},
    {"id": 57, "name": "Grace"},
    {"id": 58, "name": "Henry"},
    {"id": 59, "name": "Ivy"},
    {"id": 60, "name": "Jack"},
    {"id": 61, "name": "Alice"},
    {"id": 62, "name": "Bob"},
    {"id": 63, "name": "Charlie"},
    {"id": 64, "name": "David"},
    {"id": 65, "name": "Emma"},
    {"id": 66, "name": "Frank"},
    {"id": 67, "name": "Grace"},
    {"id": 68, "name": "Henry"},
    {"id": 69, "name": "Ivy"},
    {"id": 70, "name": "Jack"},
    {"id": 71, "name": "Alice"},
    {"id": 72, "name": "Bob"},
    {"id": 73, "name": "Charlie"},
    {"id": 74, "name": "David"},
    {"id": 75, "name": "Emma"},
    {"id": 76, "name": "Frank"},
    {"id": 77, "name": "Grace"},
    {"id": 78, "name": "Henry"},
    {"id": 79, "name": "Ivy"},
    {"id": 80, "name": "Jack"},
    {"id": 81, "name": "Alice"},
    {"id": 82, "name": "Bob"},
    {"id": 83, "name": "Charlie"},
    {"id": 84, "name": "David"},
    {"id": 85, "name": "Emma"},
    {"id": 86, "name": "Frank"},
    {"id": 87, "name": "Grace"},
    {"id": 88, "name": "Henry"},
    {"id": 89, "name": "Ivy"},
    {"id": 90, "name": "Jack"},
    {"id": 91, "name": "Alice"},
    {"id": 92, "name": "Bob"},
    {"id": 93, "name": "Charlie"},
    {"id": 94, "name": "David"},
    {"id": 95, "name": "Emma"},
    {"id": 96, "name": "Frank"},
    {"id": 97, "name": "Grace"},
    {"id": 98, "name": "Henry"},
    {"id": 99, "name": "Ivy"},
    {"id": 100, "name": "Jack"}
  ]
  return (
<View>
  <Text>this is the text</Text>
  <ScrollView >
    <View style={{ display:"flex",flexDirection: "row", flexWrap: 
  "wrap" }}>
    {
      user.map((item, index) => (
        <Text key={index} style={{ width: 100, height: 50, borderColor: "black", backgroundColor: "red", margin: 10 }}>
          {item.name}
        </Text>
      ))
    }
    </View>
  </ScrollView>
</View>

  )
}

export default Grid