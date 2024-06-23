import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ListPokemones from './components/ListPokemones/ListPokemones';
import ListGeneraciones from './components/ListGeneraciones/ListGeneraciones';

const Pokemones = () => {
  const [text, setText] = useState('');

  return (
    <>
      <View
        style={{
          backgroundColor: '#424242',
          marginHorizontal: 8,
          marginVertical: 15,
          width: '90%',
          height: '80%',
          borderRadius: 25,
          borderColor: '#fff',
          borderWidth: 4,
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}>
        <TextInput
          style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            width: '100%',
            padding: 10,
            fontSize: 14,
            marginVertical: 10,
          }}
          placeholder='Buscar por Id o nombre'
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <ListGeneraciones />
        {/* <ListPokemones /> */}
      </View>
    </>
  );
};

export default Pokemones;

const styles = StyleSheet.create({});
