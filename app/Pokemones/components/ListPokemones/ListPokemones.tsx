import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardPokemon from './Components/CardPokemon';
import { fakeDataPokemons } from '../../../../assets/fakeData/fakeData';

const ListPokemones = () => {
  return (
    <FlatList
      data={fakeDataPokemons}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        columnGap: 10,
        marginBottom: 10,
        justifyContent: 'center',
      }}
      renderItem={({ item }) => (
        <CardPokemon
          id={item.id}
          img={item.img}
          name={item.name}
          key={item.id}
        />
      )}
    />
  );
};

export default ListPokemones;

const styles = StyleSheet.create({});
