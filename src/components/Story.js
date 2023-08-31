import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Plus from '../assets/plus.svg';
import {color} from '../theme';
export const Story = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.highlight, {marginLeft: 13}]}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profile}
            source={require('../assets/profile2.png')}
          />
        </View>
        <Text style={styles.text}>Highlight</Text>
      </View>
      <View style={styles.highlight}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profile}
            source={require('../assets/profile2.png')}
          />
        </View>
        <Text style={styles.text}>Highlight</Text>
      </View>
      <View style={styles.newStory}>
        <View style={styles.plusView}>
          <Plus width={33} height={33} />
        </View>
        <Text style={styles.text}>New</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    flexDirection: 'row',
    padding:10
  },
  highlight: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  newStory: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusView: {
    borderWidth: 1,
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: color.palette.black,
  },
});
