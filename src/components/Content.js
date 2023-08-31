import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

export const Content = () => {
  const arr = [
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
    {path: '../assets/profile2.png'},
  ];
  return (
    <View style={styles.container}>
      {arr.map((item, index) => {
        return (
          <Image
          key={index}
            style={styles.profile}
            source={require('../assets/profile2.png')}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.38,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profile: {
    width: '32%',
    height: 120,
    margin: 2.44,
  },
});
