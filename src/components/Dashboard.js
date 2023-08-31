import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../theme';
import {fontSizes, fontWeights} from '../theme/styles';

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigBox}>
        <Text style={styles.heading}>Professional Dashboard</Text>
        <Text style={styles.subHeading}>
          3 accounts reached in last 30 days
        </Text>
      </View>
      <View style={styles.boxes}>
        <View style={styles.smallBox}>
          <Text style={styles.smallHeading}>Edit Profile</Text>
        </View>
        <View style={styles.smallBox}>
          <Text style={styles.smallHeading}>Share Profile</Text>
        </View>
        <View style={styles.smallBox}>
          <Text style={styles.smallHeading}>Contact</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.14,
  },
  bigBox: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#f3f3f3',
  },
  heading: {
    color: color.palette.black,
    fontWeight: fontWeights.bold,
  },
  subHeading: {
    color:color.palette.lightGray
  },
  boxes: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  smallBox: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    padding: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  smallHeading: {
    color: color.palette.black,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.small,
  },
});
