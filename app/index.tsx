import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import Pokemones from './ListPokemones';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pokemon from './Pokemon';
import ListGeneraciones from './Components/Pokemones/ListGeneraciones/ListGeneraciones';
import ListPokemones from './Components/Pokemones/ListPokemones/ListPokemones';
import Index from './Components/Index/Index';

const index = () => {
  const { width } = useWindowDimensions();
  const [text, setText] = useState('');

  return (
    <>
      <Index>
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
        <ListGeneraciones />
      </Index>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2232A',
    alignItems: 'center',
  },
  test: {
    width: '100%',
    height: 100,
  },
});
