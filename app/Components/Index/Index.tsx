import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { PropsWithChildren, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

const Index = ({ children }: PropsWithChildren) => {
  const { width } = useWindowDimensions();
  const [text, setText] = useState('');
  return (
    <>
      <StatusBar style='auto' hidden />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/image.png')}
          style={[styles.test, { width: width }]}
          contentFit='fill'
        />

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
          {children}
          {/* <Pokemones /> */}
        </View>
      </View>
    </>
  );
};

export default Index;

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
