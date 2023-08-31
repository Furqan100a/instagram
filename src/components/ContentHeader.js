import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Boxes from '../assets/boxes.svg';
import Reel from '../assets/reelsLight.svg';
import Profile from '../assets/profile.svg';
import { color } from '../theme';
export const ContentHeader = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box,{borderBottomWidth:2,borderColor:color.palette.black}]}>
        <Boxes width={22} height={22} />
      </View>
      <View style={styles.box}>
        <Reel width={25} height={25} />
      </View>
      <View style={styles.box}>
        <Profile width={25} height={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    
  },
  box: {
    padding:10,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
});
