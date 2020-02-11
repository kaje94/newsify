import React, {Component} from 'react';
import {ScrollView, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import ReactNativePickerModule from 'react-native-picker-module';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FeedScreenStyle';

const options = ['bitcoin', 'apple', 'earthquake', 'animal'];

class FeedScreen extends Component {
  state = {
    selectedIndex: 0,
    selectedText: options[0],
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView behavior="position">
          <TouchableOpacity onPress={() => this.pickerRef.show()}>
            <Text style={styles.titleText}>{this.state.selectedText}</Text>
          </TouchableOpacity>

          <Card
            elevation={3}
            onPress={() => this.props.navigation.navigate('ViewDetailScreen')}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
              <Text>sds</Text>
            </Card.Content>
          </Card>

          <ReactNativePickerModule
            pickerRef={e => (this.pickerRef = e)}
            value={this.state.selectedIndex}
            selectedValue={this.state.selectedText}
            title={'Select a Category'}
            items={options}
            onValueChange={(valueText, index) => {
              this.setState({
                selectedIndex: index,
                selectedText: valueText,
              });
            }}
          />
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
