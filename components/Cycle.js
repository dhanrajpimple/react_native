import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Cycle = () => {

  useEffect(() => {
    const clr = setInterval(() => {
      console.warn('called');
    }, 2000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(clr);
    };
  }, []);

  return (
    <View>
      <Text>Component is called</Text>
    </View>
  );
};

export default Cycle;
