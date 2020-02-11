import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  Linking,
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
    const {
      title,
      author,
      description,
      url,
      imageUrl,
      publishedAt,
      content,
    } = this.props.navigation.state.params;
    return (
      <React.Fragment>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title={title} />
        </Appbar.Header>
        <ScrollView
          style={[styles.container, {paddingHorizontal: 0, paddingTop: 0}]}>
          {imageUrl && (
            <Image
              style={styles.bannerImage}
              source={{
                uri: imageUrl,
              }}
            />
          )}
          <View style={styles.container}>
            <Subheading>{description}</Subheading>
            <Paragraph>{content}</Paragraph>
            {author && <Caption>Author: {author}</Caption>}
            <Caption>Published at: {publishedAt}</Caption>

            <Button
              mode="outlined"
              onPress={() => Linking.openURL(url)}
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
