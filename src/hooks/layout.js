import { graphql, useStaticQuery } from 'gatsby';

export const useLayout = () => {
  const data = useStaticQuery(graphql`
    query GlobalData {
      allStoryblokEntry(filter: { field_component: { eq: "global" } }) {
        edges {
          node {
            name
            full_slug
            path
            field_component
            content
          }
        }
      }
    }
  `);
  return data.allStoryblokEntry.edges[0].node;
};
