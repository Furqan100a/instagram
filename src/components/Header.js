import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowDown from '../assets/arrowdown.svg';
import AddPlus from '../assets/addPlus.svg';
import Options from '../assets/options.svg';

import {color} from '../theme';
import {fontSizes, fontWeights} from '../theme/styles';
export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userNameView}>
        <Text style={styles.userText}>afurqan520</Text>
        <View style={styles.downView}>
          <ArrowDown width={15} height={15} />
        </View>
      </View>
      <View style={styles.optView}>
        <View style={styles.icon1}>
          <AddPlus width={35} height={35} />
        </View>
        <View style={styles.icon2}>
          <Options width={35} height={35} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    padding: 10,
    paddingRight: 10,
  },
  userNameView: {
    flexDirection: 'row',
  },
  userText: {
    color: color.palette.black,
    fontSize: 20,
    fontWeight: fontWeights.extraBold,
  },
  downView: {
    justifyContent: 'center',
  },
  optView: {
    flexDirection: 'row',
  },
  icon2: {
    marginLeft: 10,
  },
});
