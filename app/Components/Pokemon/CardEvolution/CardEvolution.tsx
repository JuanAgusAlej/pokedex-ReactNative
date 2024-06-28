import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import TypeCard from './Components/TypeCard/TypeCard';

const CardEvolution = ({
  evolutionCondition,
  id,
  type,
  name,
}: {
  id: string;
  name: string;
  type: Array<{ color: string; name: string }>;
  evolutionCondition: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: '#18C683',
        flexDirection: 'row',
        borderRadius: 15,
        paddingVertical: 5,
        marginVertical: 10,
      }}>
      <View
        style={{
          width: '60%',
          alignItems: 'center',
        }}>
        <Image
          source={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          style={{ width: '100%', height: 100 }}
          contentFit='scale-down'
        />
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
            textTransform: 'capitalize',
            marginBottom: 5,
          }}>
          {`#${id} - ${name}`}
        </Text>
      </View>
      <View style={{ width: '35%' }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
          }}>
          Tipo
        </Text>
        {type.map((item) => (
          <TypeCard color={item.color} name={item.name} />
        ))}
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            marginTop: 5,
          }}>
          Condicion
        </Text>
        <Text style={{ fontSize: 12 }}>{evolutionCondition}</Text>
      </View>
    </View>
  );
};

export default CardEvolution;

const styles = StyleSheet.create({});
