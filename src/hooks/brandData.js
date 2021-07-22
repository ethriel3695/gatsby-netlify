import { graphql, useStaticQuery } from 'gatsby';

export const useBrandData = () => {
  const data = useStaticQuery(graphql`query brandData {
  brandLogo: file(
    relativePath: {regex: "/(jpg)|(jpeg)|(png)|(svg)/"}
    relativeDirectory: {eq: "logo"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 250, placeholder: BLURRED, layout: CONSTRAINED)
    }
    extension
    publicURL
  }
}
`);
  return data;
};
