import { graphql, useStaticQuery } from 'gatsby';

export const useArticleData = () => {
  const data = useStaticQuery(graphql`
    query DefaultBlogQuery {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(formatString: "MMMM Do, YYYY")
            author
            tags
          }
        }
      }
    }
  `);
  return data;
};
