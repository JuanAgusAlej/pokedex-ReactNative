import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ListPokemones from './components/ListPokemones/ListPokemones';
import ListGeneraciones from './components/ListGeneraciones/ListGeneraciones';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pokemon from '../Pokemon/Pokemon';
const Pokemones = () => {
  const [text, setText] = useState('');

  return (
    <>
      <View
        style={{
          backgroundColor: '#424242',
          marginHorizontal: 8,
          marginVertical: 15,
          width: '95%',
          height: '80%',
          borderRadius: 25,
          borderColor: '#fff',
          borderWidth: 4,
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}>
        {false && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{ width: '15%' }}>
              <Ionicons name='chevron-back' size={30} color='#fff' />
            </TouchableOpacity>
            <TextInput
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: 10,
                width: '85%',
                fontSize: 14,
                marginVertical: 10,
              }}
              placeholder='Buscar por Id o nombre'
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
            />
          </View>
        )}
        <Pokemon />
        {/* <ListGeneraciones /> */}
        {/* <ListPokemones /> */}
      </View>
    </>
  );
};

export default Pokemones;

const styles = StyleSheet.create({});
