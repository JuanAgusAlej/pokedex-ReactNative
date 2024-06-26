import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import Pokemones from './app/Pokemones/Pokemones';

export default function App() {
  const { width } = useWindowDimensions();
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <>
      <StatusBar style='auto' hidden />
      <View style={styles.container}>
        <Image
          source={require('./assets/image.png')}
          style={[styles.test, { width: width }]}
          contentFit='fill'
        />

        <Pokemones />
      </View>
    </>
  );
}

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
