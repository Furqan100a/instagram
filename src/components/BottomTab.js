import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../assets/home.svg';
import Search from '../assets/search.svg';
import Reels from '../assets/reels.svg';
import Add from '../assets/addPlus.svg';
import {color} from '../theme';

export const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Home width={30} height={30} />
      <Search width={25} height={25} />
      <Add width={35} height={35} />
      <Reels width={25} height={25} />
      <Image
        style={styles.profile}
        source={require('../assets/profile2.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: color.palette.white,
    padding: 4,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: color.palette.black,
  },
});
