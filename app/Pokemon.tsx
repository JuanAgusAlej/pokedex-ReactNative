import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import ImagePokemon from './Components/Pokemon/ImagePokemon/ImagePokemon';
import DataPokemon from './Components/Pokemon/DataPokemon/DataPokemon';
import CardEvolution from './Components/Pokemon/CardEvolution/CardEvolution';
import Index from './Components/Index/Index';
import { useNavigation } from 'expo-router';

const Pokemon = () => {
  const navigation = useNavigation();
  return (
    <Index>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ width: '10%', marginRight: 10 }}>
            <Ionicons name='chevron-back' size={30} color='#fff' />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}>
            Bulbasour N.º 1
          </Text>
        </View>

        <ImagePokemon
          urlComun='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          urlShinny='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png'
        />

        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            paddingVertical: 10,
            textTransform: 'capitalize',
          }}>
          Lorem ipsum dolor sit amet consectetur adip isicing elit. Tempora
          maxime necessitatibus aliquid sed suscipit
        </Text>

        <DataPokemon
          bodyPokemon={{ height: 0.7, width: 0.7, habitt: 'pasto' }}
          soundPokemon=''
          status={{
            atEsp: 65,
            atk: 49,
            def: 49,
            defEsp: 65,
            hp: 200,
            speed: 49,
          }}
          type={[
            { color: '#9BCC50', name: 'Planta' },
            { color: '#B97FC9', name: 'Veneno' },
          ]}
          weakness={[
            { color: '#FD7D24', name: 'Fuego' },
            { color: '#51C4E7', name: 'Hielo' },
            { color: '#7FAEE9', name: 'Volador' },
            { color: '#F366B9', name: 'Psiquico' },
          ]}
        />
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Evolucion</Text>
          <View style={{ justifyContent: 'center' }}>
            {[
              {
                evolutionCondition: 'LVL 16',
                id: '2',
                name: 'ivysaur',
                type: [
                  { color: '#9BCC50', name: 'Planta' },
                  { color: '#B97FC9', name: 'Veneno' },
                ],
              },
              {
                evolutionCondition: 'LVL 36',
                id: '3',
                name: 'venusaur',
                type: [
                  { color: '#9BCC50', name: 'Planta' },
                  { color: '#B97FC9', name: 'Veneno' },
                ],
              },
            ].map((item, index) => (
              <CardEvolution
                key={index}
                evolutionCondition={item.evolutionCondition}
                id={item.id}
                name={item.name}
                type={item.type}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Index>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
