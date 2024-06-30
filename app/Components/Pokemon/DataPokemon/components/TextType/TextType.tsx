import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TextType = ({ color, type }: { color: string; type: string }) => {
  return (
    <Text
      style={{
        backgroundColor: color,
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 10,
        fontSize: 15,
        textTransform: 'capitalize',
      }}>
      {type}
    </Text>
  );
};

export default TextType;

const styles = StyleSheet.create({});
