import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av';

const Pokemon = () => {
  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg',
    });
    await sound?.playAsync();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity style={{ width: '10%', marginRight: 10 }}>
          <Ionicons name='chevron-back' size={30} color='#fff' />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            textAlign: 'center',
          }}>
          Bulbasour N.º 1
        </Text>
      </View>

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
            source={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
            }
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
            source={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png'
            }
            style={{ width: '100%', height: '80%' }}
            contentFit='contain'
          />
          <Text style={{ color: '#fff', fontSize: 25 }}>Shinny</Text>
        </View>
      </View>

      <Text style={{ color: '#fff', fontSize: 15, paddingVertical: 10 }}>
        Lorem ipsum dolor sit amet consectetur adip isicing elit. Tempora maxime
        necessitatibus aliquid sed suscipit
      </Text>

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
            <View>
              <Text style={{ color: '#fff', fontSize: 15 }}>Altura</Text>
              <Text style={{ fontSize: 15 }}>0.7 m</Text>
            </View>
            <View>
              <Text style={{ color: '#fff', fontSize: 15 }}>Peso</Text>
              <Text style={{ fontSize: 15 }}>0.7 m</Text>
            </View>
            <View>
              <Text style={{ color: '#fff', fontSize: 15 }}>habitad</Text>
              <Text style={{ fontSize: 15 }}>0.7 m</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#fff', fontSize: 15, marginBottom: 5 }}>
            Estadisticas
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>HP</Text>
              <Text style={{ fontSize: 15 }}>200</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>Speed</Text>
              <Text style={{ fontSize: 15 }}>49</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>Att</Text>
              <Text style={{ fontSize: 15 }}>49</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>Def</Text>
              <Text style={{ fontSize: 15 }}>49</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>At. Esp</Text>
              <Text style={{ fontSize: 15 }}>65</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>Def. Esp</Text>
              <Text style={{ fontSize: 15 }}>65</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#fff', fontSize: 15, marginBottom: 5 }}>
            Tipo
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                backgroundColor: '#9BCC50',
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginRight: 10,
                fontSize: 15,
              }}>
              Planta
            </Text>
            <Text
              style={{
                backgroundColor: '#B97FC9',
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginRight: 10,
                fontSize: 15,
              }}>
              Veneno
            </Text>
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
            <Text
              style={{
                backgroundColor: '#FD7D24',
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 10,
                fontSize: 15,
              }}>
              Fuego
            </Text>
            <Text
              style={{
                backgroundColor: '#51C4E7',
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 10,

                fontSize: 15,
              }}>
              Hielo
            </Text>
            <Text
              style={{
                backgroundColor: '#7FAEE9',
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 10,

                fontSize: 15,
              }}>
              Volador
            </Text>
            <Text
              style={{
                backgroundColor: '#F366B9',
                paddingVertical: 2,
                paddingHorizontal: 20,
                borderRadius: 10,

                fontSize: 15,
              }}>
              Psiquico
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingVertical: 15 }}>
        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 10 }}>
          Evolucion
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              width: '49%',
              height: 125,
              backgroundColor: '#18C683',
              flexDirection: 'row',
              borderRadius: 15,
              paddingVertical: 5,
            }}>
            <View
              style={{
                width: '60%',
                alignItems: 'center',
              }}>
              <Image
                source={
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
                }
                style={{ width: '90%', height: '80%' }}
                contentFit='contain'
              />
              <Text>hola</Text>
            </View>
            <View style={{ width: '35%' }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                }}>
                Tipo
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  textAlign: 'center',
                  backgroundColor: '#9BCC50',
                  paddingVertical: 2,
                  borderRadius: 5,
                  fontSize: 12,
                }}>
                Planta
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  textAlign: 'center',
                  backgroundColor: '#B97FC9',
                  paddingVertical: 2,
                  borderRadius: 5,
                  fontSize: 12,
                }}>
                Veneno
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Condicion
              </Text>
              <Text style={{ fontSize: 12 }}>LVL 16</Text>
            </View>
          </View>
          <View
            style={{
              width: '49%',
              height: 125,
              backgroundColor: '#18C683',
              flexDirection: 'row',
              borderRadius: 15,
              paddingVertical: 5,
            }}>
            <View
              style={{
                width: '60%',
                alignItems: 'center',
              }}>
              <Image
                source={
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
                }
                style={{ width: '90%', height: '80%' }}
                contentFit='contain'
              />
              <Text>hola</Text>
            </View>
            <View style={{ width: '35%' }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                }}>
                Tipo
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  textAlign: 'center',
                  backgroundColor: '#9BCC50',
                  paddingVertical: 2,
                  borderRadius: 5,
                  fontSize: 12,
                }}>
                Planta
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  textAlign: 'center',
                  backgroundColor: '#B97FC9',
                  paddingVertical: 2,
                  borderRadius: 5,
                  fontSize: 12,
                }}>
                Veneno
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Condicion
              </Text>
              <Text style={{ fontSize: 12 }}>LVL 16</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
