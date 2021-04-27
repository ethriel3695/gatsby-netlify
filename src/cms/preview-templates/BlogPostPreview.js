import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from '../../components/Post/PostContainer';

const BlogPostPreview = ({ entry, widgetFor }) => {
  // const tags = entry.getIn(['data', 'tags']);
  return (
    <PostContainer
      data={widgetFor('body')}
      frontmatter={entry.getIn(['data', 'title'])}
      // tags={tags && tags.toJS()}
      // title={entry.getIn(['data', 'title'])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
