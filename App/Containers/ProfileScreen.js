import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, TextInput, Button} from 'react-native-paper';
import Color from '../Themes/Colors';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle';

class ProfileScreen extends Component {
  state = {
    inputText: '',
  };
  render() {
    return (
      <ScrollView style={styles.container} KeyboardAvoidingView>
        <SafeAreaView behavior="position">
          <Text style={[styles.titleText, styles.textRightAlign]}>Profile</Text>
          <KeyboardAvoidingView style={styles.wrap}>
            <View style={styles.avatarWrap}>
              <Avatar.Icon size={100} icon="account" />
            </View>
            {/* <TextInput
              mode="outlined"
              label="User name"
              value={this.state.inputText}
              onChangeText={text => this.setState({inputText: text})}
              style={styles.textInputStyle}
            /> */}
            <Text style={[styles.titleText, styles.textCenterAlign]}>
              Hi, Bob
            </Text>
            <Button
              mode="outlined"
              icon="plus"
              onPress={() => console.log('Pressed')}
              contentStyle={{padding: 12}}
              style={styles.buttonStyle}>
              Log In
            </Button>
          </KeyboardAvoidingView>
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
)(ProfileScreen);
