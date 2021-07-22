import React from 'react';
import { graphql } from 'gatsby';
import LayoutContainer from '../components/UI/LayoutContainer';
import PostContainer from '../components/Post/PostContainer';

export default function Post({ pageContext, data: { mdx: post } }) {
  return (
    <div>
      <LayoutContainer
        siteTitle={pageContext.siteTitle}
        brand={pageContext.brand}
        newsletter={pageContext.newsletter}
        copyright={pageContext.copyrightMessage}
        loginOption={pageContext.loginOption}
        isAuthApp={pageContext.isAuthApp}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        categories={post.frontmatter.categories}
      >
        <PostContainer data={post.body} frontmatter={post.frontmatter} />
      </LayoutContainer>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        tags
        date(formatString: "dddd MMMM Do, YYYY")
      }
      body
    }
  }
`;
