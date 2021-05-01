import React from 'react';
import PropTypes from 'prop-types';
import CMSPostContainer from '../../components/Post/CMSPostContainer';

const BlogPostPreview = ({ entry }) => {
  // const tags = entry.getIn(['data', 'tags']);
  return (
    <CMSPostContainer
      data={entry.getIn(['data']).toJS()}
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
