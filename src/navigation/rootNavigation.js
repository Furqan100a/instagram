import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteNames} from './rootNames';
import {TabNavigator} from './TabNavigator';
export const RootNavigator = React.forwardRef((props, ref) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer {...props} ref={ref}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={"main"}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});