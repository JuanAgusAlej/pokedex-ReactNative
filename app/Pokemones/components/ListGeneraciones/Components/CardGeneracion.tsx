import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CardGeneracion = ({ name, key }: { name: string; key: number }) => {
  return (
    <TouchableOpacity
      key={key}
      onPress={() => {
        console.log('hol');
      }}
      style={{
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 12,
      }}>
      <Text style={{ fontSize: 24 }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CardGeneracion;

const styles = StyleSheet.create({});
