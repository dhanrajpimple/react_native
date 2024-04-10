import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet, Button } from 'react-native';


const Loader = ({ color = 'red', size = 'large' }) => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={size} animating={isLoading}  />
      <Button title={isLoading ? 'Stop Loading' : 'Start Loading'} onPress={toggleLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
