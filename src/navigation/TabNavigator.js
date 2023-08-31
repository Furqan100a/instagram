import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteNames} from './rootNames';
import {
  HomeScreen,
  PostScreen,
  ProfileScreen,
  ReelScreen,
  SearchScreen,
} from '../screens';
export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'},
      }}>
      <Tab.Screen name={RouteNames.ProfileScreen} component={ProfileScreen} />
      <Tab.Screen name={RouteNames.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={RouteNames.PostScreen} component={PostScreen} />
      <Tab.Screen name={RouteNames.ReelScreen} component={ReelScreen} />
      <Tab.Screen name={RouteNames.SearchScreen} component={SearchScreen} />
    </Tab.Navigator>
  );
};
