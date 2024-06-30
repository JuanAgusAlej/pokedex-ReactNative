import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import TextInfo from './components/TextInfo/TextInfo';
import TextType from './components/TextType/TextType';

const DataPokemon = ({
  soundPokemon,
  bodyPokemon,
  status,
  type,
  weakness,
}: {
  soundPokemon: string;
  bodyPokemon: {
    height: number;
    width: number;
    habitt: string;
  };
  status: {
    hp: number;
    speed: number;
    atk: number;
    def: number;
    atEsp: number;
    defEsp: number;
  };
  type: Array<{
    name: string;
    color: string;
  }>;
  weakness: Array<{
    name: string;
    color: string;
  }>;
}) => {
  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: soundPokemon,
    });
    await sound?.playAsync();
  };
  return (
    <View
      style={{
        backgroundColor: '#18C683',
        width: '100%',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{ padding: 10 }}
          touchSoundDisabled={true}
          onPress={playAudio}>
          <Ionicons name='play-outline' size={20} color='#fff' />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-around',
          }}>
          <TextInfo text='Altura' data={bodyPokemon.height} />
          <TextInfo text='Peso' data={bodyPokemon.width} />
          <TextInfo text='Habitad' data={bodyPokemon.habitt} />
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 5 }}>
          Estadisticas
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInfo text='HP' data={status.hp} />
          <TextInfo text='Speed' data={status.speed} />
          <TextInfo text='ATK' data={status.atk} />
          <TextInfo text='DEF' data={status.def} />
          <TextInfo text='Atk. Esp' data={status.atEsp} />
          <TextInfo text='Def. Esp' data={status.defEsp} />
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 5 }}>
          Tipo
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {type.map((item) => (
            <TextType color={item.color} type={item.name} />
          ))}
        </View>
      </View>
      <View>
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 5 }}>
          Debilidad
        </Text>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
            rowGap: 10,
            flexWrap: 'wrap',
          }}>
          {weakness.map((item) => (
            <TextType color={item.color} type={item.name} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default DataPokemon;

const styles = StyleSheet.create({});
