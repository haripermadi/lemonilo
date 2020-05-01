/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home'
import MyOrders from './src/screens/MyOrders'
import Profile from './src/screens/Profile'



Icon.loadFont()

const App = createBottomTabNavigator(
  {
    Home: { screen: Home },
    MyOrder: { screen: MyOrders },
    Profile: { screen: Profile }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `compass${focused ? '' : '-outline'}`;
        } else if (routeName === 'MyOrder') {
          iconName = `cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `account${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff9f43',
      inactiveTintColor: '#B8B8B8',
    },
  }
)

export default createAppContainer(App)

