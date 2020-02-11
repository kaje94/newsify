import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export default class CardNewsItem extends Component {
  static defaultProps = {
    title: '',
    author: '',
    description: '',
    url: '',
    imageUrl: '',
    publishedAt: '',
    content: '',
  };

  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    publishedAt: PropTypes.string,
    content: PropTypes.string,
  };

  render() {
    const {
      title,
      author,
      description,
      url,
      imageUrl,
      publishedAt,
      content,
    } = this.props;
    return (
      <Card
        elevation={3}
        onPress={() =>
          this.props.navigation.navigate('ViewDetailScreen', {
            title,
            author,
            description,
            url,
            imageUrl,
            publishedAt,
            content,
          })
        }>
        {imageUrl && <Card.Cover source={{uri: imageUrl}} />}
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph numberOfLines={2}>{description}</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}
