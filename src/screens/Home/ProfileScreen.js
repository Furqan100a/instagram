import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../theme';
import {BottomTab, Header, ProfileComponent,Description, Dashboard, Story, ContentHeader, Content} from '../../components';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
      <ProfileComponent />
      <Description />
      <Dashboard />
      <Story />
      <ContentHeader />
      <Content />
      </ScrollView>
      <BottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.palette.white
  },
});
