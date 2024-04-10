import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Radiob = () => {
  const [selectedId, setSelectedId] = useState(1);
  const radioOptions = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
    { id: 6, name: "Option 6" }
  ];

  const handleOptionSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <View style={styles.container}>
      {radioOptions.map(option => (
        <TouchableOpacity
          key={option.id}
          onPress={() => handleOptionSelect(option.id)}
          style={styles.option}
        >
          <View style={[styles.radioCircle, selectedId === option.id && styles.selectedRadioCircle]} />
          <Text style={styles.optionText}>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
  },
  selectedRadioCircle: {
    backgroundColor: '#e91e63',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Radiob;
