import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FeedScreenStyle';

class FeedScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView behavior="position">
          <Text style={styles.titleText}>Feed</Text>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedScreen);
