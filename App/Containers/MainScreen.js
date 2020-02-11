import React, {Component} from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle';

class MainScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text>MainScreen Container</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
