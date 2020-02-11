import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  Appbar,
  Title,
  Subheading,
  Paragraph,
  Caption,
  Button,
} from 'react-native-paper';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ViewDetailScreenStyle';

class ViewDetailScreen extends Component {
  _goBack = () => this.props.navigation.goBack();

  render() {
    return (
      <React.Fragment>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Title" />
        </Appbar.Header>
        <ScrollView
          style={[styles.container, {paddingHorizontal: 0, paddingTop: 0}]}>
          <Image
            style={styles.bannerImage}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <View style={styles.container}>
            <Subheading>descr</Subheading>
            <Paragraph>content</Paragraph>
            <Caption>Author: bob</Caption>
            <Caption>Published at: bob</Caption>

            <Button
              mode="outlined"
              onPress={() => console.log('Pressed')}
              contentStyle={{padding: 10}}
              style={styles.buttonStyle}>
              Read Full Article
            </Button>
          </View>
        </ScrollView>
      </React.Fragment>
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
)(ViewDetailScreen);
