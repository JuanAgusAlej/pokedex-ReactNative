import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TextInfo = ({ data, text }: { text: string; data: number | string }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 15 }}>{text}</Text>
      <Text style={{ fontSize: 15 }}>
        {'number' === typeof data ? `${data}m` : data}
      </Text>
    </View>
  );
};

export default TextInfo;

const styles = StyleSheet.create({});
