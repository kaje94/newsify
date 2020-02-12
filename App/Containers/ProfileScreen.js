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
import AuthRedux from '../Redux/AuthRedux';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle';

class ProfileScreen extends Component {
  state = {
    inputText: '',
  };
  loginUser = () => {
    this.props.login(this.state.inputText);
  };
  render() {
    const {username} = this.props.auth;

    return (
      <ScrollView style={styles.container} KeyboardAvoidingView>
        <SafeAreaView behavior="position">
          <Text style={[styles.titleText, styles.textRightAlign]}>Profile</Text>
          <KeyboardAvoidingView style={styles.wrap}>
            <View style={styles.avatarWrap}>
              <Avatar.Icon size={100} icon="account" />
            </View>
            {username ? (
              <Text style={[styles.titleText, styles.textCenterAlign]}>
                Hi, {username}
              </Text>
            ) : (
              <TextInput
                mode="outlined"
                label="User name"
                value={this.state.inputText}
                onChangeText={text => this.setState({inputText: text})}
                style={styles.textInputStyle}
              />
            )}

            <Button
              mode="outlined"
              icon={username ? 'logout' : 'plus'}
              onPress={username ? this.props.logout : this.loginUser}
              contentStyle={{padding: 12}}
              disabled={!(username || this.state.inputText)}
              style={styles.buttonStyle}>
              {username ? 'Log out' : 'Login'}
            </Button>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(AuthRedux.loginRequest(username)),
  logout: () => dispatch(AuthRedux.logoutRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
