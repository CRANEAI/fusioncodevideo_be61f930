import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

const RecipeView = ({
  error,
  posts,
  postId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all posts
  let post = null;
  if (postId && posts) {
    post = posts.find(item => parseInt(item.id, 10) === parseInt(postId, 10));
  }

  // Recipe not found
  if (!post) return <Error content={ErrorMessages.post404} />;

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }}>
        <Image source={{ uri: post.image }}  style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            flexGrow: 1
          }} />
      </Content>
    </Container>
  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  postId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;