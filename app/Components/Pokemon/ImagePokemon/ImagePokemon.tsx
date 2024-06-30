import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const ImagePokemon = ({
  urlComun,
  urlShinny,
}: {
  urlComun: string;
  urlShinny: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: '#18C683',
        borderRadius: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
      }}>
      <View
        style={{
          width: '40%',
          height: 150,
          alignItems: 'center',
        }}>
        <Image
          source={urlComun}
          style={{ width: '100%', height: '80%' }}
          contentFit='contain'
        />
        <Text style={{ color: '#fff', fontSize: 25 }}>Comun</Text>
      </View>

      <View
        style={{
          width: '40%',
          height: 150,

          alignItems: 'center',
        }}>
        <Image
          source={urlShinny}
          style={{ width: '100%', height: '80%' }}
          contentFit='contain'
        />
        <Text style={{ color: '#fff', fontSize: 25 }}>Shinny</Text>
      </View>
    </View>
  );
};

export default ImagePokemon;

const styles = StyleSheet.create({});
