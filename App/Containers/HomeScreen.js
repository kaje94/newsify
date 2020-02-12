import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import CardNewsItem from '../Components/CardNewsItem';
import ListEmptyComponent from '../Components/EmptyList';
import {ActivityIndicator} from 'react-native-paper';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import NewsRedux from '../Redux/NewsRedux';

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getHeadlines();
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView behavior="position">
          <Text style={[styles.titleText, styles.textCenterAlign]}>
            Headlines
          </Text>
          {this.props.news.headlines &&
            this.props.news.headlines.length > 0 && (
              <FlatList
                data={this.props.news.headlines}
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
                refreshing={this.props.news.fetchingHeadlines}
              />
            )}
          {this.props.news.headlines &&
          this.props.news.headlines.length === 0 &&
          this.props.news.fetchingHeadlines ? (
            <View style={styles.activityIndicatorWrap}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <ListEmptyComponent />
          )}
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
  getHeadlines: () => dispatch(NewsRedux.getHeadlinesRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
