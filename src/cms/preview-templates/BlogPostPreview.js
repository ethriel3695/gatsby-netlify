import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../components/Post/PostContainer';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const data = {
    title,
    date,
  };

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      isPreview={true}
      data={data}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default BlogPostPreview;
