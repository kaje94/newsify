import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
// const PrimaryNav = createStackNavigator({
//   MainScreen: { screen: MainScreen },
//   LaunchScreen: { screen: LaunchScreen }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'MainScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

const PrimaryNav = createMaterialTopTabNavigator({
  MainScreen:  { screen: MainScreen } ,
  LaunchScreen: { screen: LaunchScreen },
  MainScreen2:  { screen: MainScreen } ,
},  {
  tabBarPosition:'bottom',
})

export default createAppContainer(PrimaryNav)
