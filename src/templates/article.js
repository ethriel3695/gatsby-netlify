import React from 'react';
import { graphql } from 'gatsby';
import SbEditable from 'storyblok-react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import DynamicComponent from '../components/DynamicComponent';
import useStoryblok from '../lib/storyblok';
import { render } from 'storyblok-rich-text-react-renderer';

const ArticleTemplate = ({ pageContext, location }) => {
  let story = pageContext.story;
  story = useStoryblok(story, location);
  //   const components = story.content.body.map((blok) => {
  //     console.log(blok);
  //     return <DynamicComponent blok={blok} key={blok._uid} />;
  //   });

  return (
    <Layout location={location}>
      <SbEditable content={story}>
        <Seo title="Home" description="description" keywords={['categories']} />
        <div className="post-single-container">
          <article className="post-single">
            <header>
              {story.content.teaser_image ? (
                <img
                  src={story.content.teaser_image}
                  alt={story.content.title}
                  className="pb-10 w-full"
                />
              ) : null}
              {/*banner && showBanner ? (
            <Img
              fluid={banner.sharp.fluid}
              alt={title}
              style={{ height: '70vh', textAlign: 'center' }}
            />
          ) : null*/}
              <h1 className="text-center">{story.content.title}</h1>
            </header>
            <div className="text-left container">
              <div>{render(story.content.intro)}</div>
              <div>{render(story.content.long_text)}</div>
            </div>
          </article>
        </div>
      </SbEditable>
    </Layout>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query ArticleQuery {
    allStoryblokEntry(filter: { full_slug: { eq: "article" } }) {
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
