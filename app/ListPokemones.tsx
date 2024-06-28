import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ListPokemones from './Components/Pokemones/ListPokemones/ListPokemones';
import ListGeneraciones from './Components/Pokemones/ListGeneraciones/ListGeneraciones';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pokemon from './Pokemon';
import Index from './Components/Index/Index';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
const Pokemones = () => {
  const navigation = useNavigation();
  const { name } = useLocalSearchParams<{ name: string }>();
  return (
    <Index>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ width: '15%' }}>
          <Ionicons name='chevron-back' size={30} color='#fff' />
        </TouchableOpacity>

        <Text
          style={{
            borderRadius: 12,
            padding: 10,
            width: '85%',
            fontSize: 20,
            marginVertical: 10,
            color: '#fff',
          }}>
          {name}
        </Text>
      </View>
      <ListPokemones />
    </Index>
  );
};

export default Pokemones;

const styles = StyleSheet.create({});
