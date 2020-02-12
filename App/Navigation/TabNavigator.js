import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Containers/HomeScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import FeedScreen from '../Containers/FeedScreen';

import {Colors} from '../Themes';

export const TabNav = createMaterialTopTabNavigator(
  {
    News: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-list" size={30} color={tintColor} />
        ),
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={30} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-person" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      activeTintColor: Colors.silver,
      inactiveTintColor: Colors.banner,
      style: {
        backgroundColor: Colors.silver,
      },
      tabStyle: {
        // backgroundColor: Colors.transparent,
      },
      indicatorStyle: {
        backgroundColor: Colors.banner,
        height: '100%',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
      },
    },
    tabBarPosition: 'bottom',
  },
);
