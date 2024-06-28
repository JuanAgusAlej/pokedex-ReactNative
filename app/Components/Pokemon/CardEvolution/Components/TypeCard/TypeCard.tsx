import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TypeCard = ({ color, name }: { color: string; name: string }) => {
  return (
    <Text
      style={{
        textTransform: 'capitalize',
        marginTop: 5,
        textAlign: 'center',
        backgroundColor: color,
        paddingVertical: 2,
        borderRadius: 5,
        fontSize: 12,
      }}>
      {name}
    </Text>
  );
};

export default TypeCard;

const styles = StyleSheet.create({});
