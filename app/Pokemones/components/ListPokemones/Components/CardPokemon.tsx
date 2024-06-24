import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const CardPokemon = ({
  id,
  name,
  img,
}: {
  id: number;
  name: string;
  img: string;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        width: '30%',
        minHeight: 100,
        maxHeight: 100,
        borderRadius: 10,
      }}>
      <Text style={{ marginTop: 5, marginLeft: 5 }}>#{id}</Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={img}
          contentFit='contain'
          style={{ width: '60%', height: '60%' }}
        />
        <Text style={{ fontSize: 15 }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPokemon;

const styles = StyleSheet.create({});
