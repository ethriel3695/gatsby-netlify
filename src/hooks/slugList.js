import { graphql, useStaticQuery } from 'gatsby';

export const useSlugList = () => {
  const data = useStaticQuery(graphql`
    query SlugList {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: {
            published: { eq: true }
            tags: { nin: ["blog", "thanks"] }
            templateKey: { ne: "article" }
          }
        }
      ) {
        nodes {
          id
          slug
          frontmatter {
            title
            label
          }
        }
      }
    }
  `);
  return data;
};
