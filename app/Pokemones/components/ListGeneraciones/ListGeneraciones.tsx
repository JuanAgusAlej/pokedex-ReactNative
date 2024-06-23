import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { fakeDataGeneration } from '../../../../assets/fakeData/fakeData';
import CardGeneracion from './Components/CardGeneracion';

const ListGeneraciones = () => {
  return (
    <FlatList
      data={fakeDataGeneration}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <CardGeneracion name={item.name} key={index} />
      )}
    />
  );
};

export default ListGeneraciones;

const styles = StyleSheet.create({});
