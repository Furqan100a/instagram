import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { color } from '../theme';
import { fontSizes, fontWeights } from '../theme/styles';

export const ProfileComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={require('../assets/profile2.png')}
      />
      <View style={styles.detailView}>
        <View style={styles.detail}>
          <Text style={styles.number}>89</Text>
          <Text style={styles.subheading}>Posts</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.number}>19</Text>
          <Text style={styles.subheading}>Follower</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.number}>17</Text>
          <Text style={styles.subheading}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor:color.palette.white
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight:20
  },
  detailView:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    justifyContent:"space-around",
    paddingLeft:10,
    paddingRight:10
  },
  detail:{
    justifyContent:"center",
    alignItems:"center"
  },
  number:{
    color:color.palette.black,
    fontWeight:fontWeights.extraBold,
    fontSize:fontSizes.medium
  },
  subheading:{
    color:color.palette.black
  }
});
