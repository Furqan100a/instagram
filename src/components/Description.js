import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../theme';
import {fontSizes, fontWeights} from '../theme/styles';

export const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Furqan Hassan</Text>
      <Text style={styles.description}>Fitness Model</Text>
      <Text style={styles.tag}>#Programmer #Fitness #Athlete #Adventure</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    paddingLeft: 15,
  },
  name: {
    color: color.palette.black,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.small,
  },
  description: {
    color: color.palette.lightGray,
  },
  tag: {
    color: color.palette.lightBlue,
  },
});
