import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const CardGeneracion = ({ name, key }: { name: string; key: number }) => {
  return (
    <Link
      href={{ pathname: 'ListPokemones', params: { name: name } }}
      key={key}
      style={{
        textAlign: 'center',
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 12,
      }}>
      <Text style={{ fontSize: 24 }}>{name}</Text>
    </Link>
  );
};

export default CardGeneracion;

const styles = StyleSheet.create({});
