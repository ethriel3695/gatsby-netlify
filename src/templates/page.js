import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SbEditable from 'storyblok-react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import DynamicComponent from '../components/DynamicComponent';
import useStoryblok from '../lib/storyblok';

const IndexPage = ({ pageContext, location }) => {
  let story = pageContext.story;
  story = useStoryblok(story, location);

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />;
  });

  return (
    <Layout>
      <SbEditable content={story.content}>
        <Seo title="Home" />
        {components}
        <StaticImage
          src="../images/gatsby-icon.png"
          width={'100%'}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="A Gatsby Logo"
          style={{ marginBottom: `1.45rem` }}
        />
      </SbEditable>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    allStoryblokEntry(filter: { full_slug: { eq: "home" } }) {
      edges {
        node {
          name
          full_slug
          path
          content
        }
      }
    }
  }
`;
