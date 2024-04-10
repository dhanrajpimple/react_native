import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const Modall = () => {
  const [vis, setVis] = useState(false);

 
  return (
    <View style={styles.container}>
     <View>
      <Button title='show modol' onPress={()=>setVis(true)}></Button>
     </View>
     <Modal transparent={true} visible={vis} animationType='fade'>
      <View style={styles.modalContent}>
        <Text>this is me</Text>
      <Button title='this is me' onPress={()=>setVis(false)}></Button>
      </View>
     </Modal>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    padding: 20,
    backgroundColor:"black"
  },
});

export default Modall;
