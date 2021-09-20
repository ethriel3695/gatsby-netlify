export const buildNav = (navList) => {
  let navs = [];
  let navObject = null;
  navList.allMdx.nodes.map((node) => {
    navObject = {
      link: {
        url: `/${node.slug}`,
      },
      name: node.frontmatter.label,
    };
    navs.push(navObject);
    return true;
  });
  return navs;
};
