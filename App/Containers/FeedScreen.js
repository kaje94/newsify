import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import ReactNativePickerModule from 'react-native-picker-module';
import CardNewsItem from '../Components/CardNewsItem';
import NewsRedux from '../Redux/NewsRedux';
import ListEmptyComponent from '../Components/EmptyList';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FeedScreenStyle';

const options = ['bitcoin', 'apple', 'earthquake', 'animal'];

class FeedScreen extends Component {
  componentDidMount() {
    this.getNewsFeed();
  }
  getNewsFeed = () => {
    this.props.getNewsFeed(this.state.selectedText);
  };
  state = {
    selectedIndex: 0,
    selectedText: options[0],
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView behavior="position">
          <View style={styles.headerWrap}>
            <TouchableOpacity onPress={() => this.pickerRef.show()}>
              <Text style={styles.titleText}>{this.state.selectedText}</Text>
            </TouchableOpacity>
            {this.props.news.fetchingNewsFeed && (
              <ActivityIndicator size="small" />
            )}
          </View>

          <FlatList
            data={this.props.news.newsFeed}
            renderItem={({item}) => (
              <CardNewsItem
                title={item.title}
                author={item.author}
                description={item.description}
                url={item.url}
                imageUrl={item.urlToImage}
                publishedAt={item.publishedAt}
                content={item.content}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={item => item.publishedAt + item.author}
            ItemSeparatorComponent={() => <View style={{height: 15}} />}
            ListFooterComponent={() => <View style={{height: 25}} />}
            refreshing={this.props.news.fetchingNewsFeed}
            ListEmptyComponent={ListEmptyComponent}
          />

          <ReactNativePickerModule
            pickerRef={e => (this.pickerRef = e)}
            value={this.state.selectedIndex}
            selectedValue={this.state.selectedText}
            title={'Select a Category'}
            items={options}
            onValueChange={(valueText, index) => {
              this.setState(
                {
                  selectedIndex: index,
                  selectedText: valueText,
                },
                () => {
                  this.getNewsFeed();
                },
              );
            }}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = dispatch => ({
  getNewsFeed: query => dispatch(NewsRedux.getNewsFeedRequest(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedScreen);
