import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostContainer from '../components/Post/PostContainer';

export default function Post({ pageContext, location, data: { mdx: post } }) {
  return (
    <Layout location={location}>
      <PostContainer data={post.body} frontmatter={post.frontmatter} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        tags
        published
        templateKey
        label
        description
        date
      }
      body
    }
  }
`;
