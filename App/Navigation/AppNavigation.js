import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import LaunchScreen from '../Containers/LaunchScreen';
// import MainScreen from '../Containers/MainScreen';
import HomeScreen from '../Containers/HomeScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import FeedScreen from '../Containers/FeedScreen';
import ViewDetailScreen from '../Containers/ViewDetailScreen';

import styles from './Styles/NavigationStyles';
import {Colors} from '../Themes';

import {TabNav} from './TabNavigator';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    MainScreen: {screen: TabNav},
    ViewDetailScreen: {screen: ViewDetailScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    // initialRouteName: 'MainScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

// const TabNav = createMaterialTopTabNavigator(
//   {
//     News: {
//       screen: FeedScreen,
//       navigationOptions: {
//         tabBarLabel: 'Feed',
//         tabBarIcon: ({tintColor, focused}) => (
//           <Ionicons name="ios-list" size={30} color={tintColor} />
//         ),
//       },
//     },
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({tintColor, focused}) => (
//           <Ionicons name="ios-home" size={30} color={tintColor} />
//         ),
//       },
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({tintColor, focused}) => (
//           <Ionicons name="ios-person" size={30} color={tintColor} />
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: true,
//       upperCaseLabel: false,
//       activeTintColor: Colors.frost,
//       inactiveTintColor: Colors.banner,
//       style: {
//         backgroundColor: Colors.transparent,
//         // paddingBottom: 15,
//       },
//       tabStyle: {
//         // backgroundColor: Colors.transparent,
//       },
//       indicatorStyle: {
//         backgroundColor: Colors.banner,
//         height: '100%',
//         borderTopLeftRadius: 5,
//         borderTopRightRadius: 5,
//       },
//     },
//     tabBarPosition: 'bottom',
//     optimizationsEnabled: false,
//   },
// );

export default createAppContainer(PrimaryNav);
