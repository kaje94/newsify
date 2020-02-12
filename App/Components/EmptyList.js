import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Themes/Colors';
import styles from './Styles/EmptyListStyles';

export default class EmptyList extends Component {
  render() {
    return (
      <View style={styles.emptyComponent}>
        <MaterialCommunityIcons
          name="flask-empty-outline"
          size={60}
          color={Colors.banner}
        />
        <Text style={styles.textStyle}>No news to display</Text>
      </View>
    );
  }
}
