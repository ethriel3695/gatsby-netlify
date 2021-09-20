const fs = require('fs');
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);

// These are customizable theme options we only need to check once
let basePath;
let contentPath;
let assetPath;

// These templates are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/templates/post`);
const ArticleTemplate = require.resolve(`./src/templates/article.js`);
const HomeTemplate = require.resolve(`./src/templates/page.js`);

// Verify the data directory exists
exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState();
  basePath = options.basePath || `/`;
  contentPath = options.contentPath || `content/post`;
  assetPath = options.assetPath || `content/assets`;
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
  if (!fs.existsSync(assetPath)) {
    reporter.info(`creating the ${assetPath} directory`);
    fs.mkdirSync(assetPath);
  }

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach((dir) => {
    Debug.debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

// Query for nav and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
          description
          copyright
          author
        }
      }
      posts: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { slug: { ne: "placeholder/" } }
      ) {
        nodes {
          id
          slug
          frontmatter {
            title
            tags
            published
            templateKey
            label
            description
            date
          }
        }
      }
      stories: allStoryblokEntry(filter: { field_component: { eq: "page" } }) {
        edges {
          node {
            id
            name
            slug
            field_component
            full_slug
            path
            content
          }
        }
      }
      articles: allStoryblokEntry(
        filter: { field_component: { eq: "article" } }
      ) {
        edges {
          node {
            id
            name
            slug
            field_component
            full_slug
            path
            content
          }
        }
      }
      newsletter: file(
        relativePath: { regex: "/(pdf)/" }
        relativeDirectory: { eq: "newsletter" }
      ) {
        extension
        publicURL
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading nav', reporter.errors);
    return;
  }

  const entries = result.data.stories.edges;
  const articles = result.data.articles.edges;
  const posts = result.data.posts.nodes;

  if (entries) {
    entries.forEach((entry) => {
      if (entry.node.full_slug === 'home') {
        const page = {
          path: `${entry.node.path}`,
          component: require.resolve(HomeTemplate),
          context: {
            story: entry.node,
          },
        };
        createPage(page);
      }
    });
  }
  if (articles) {
    articles.forEach((entry) => {
      if (entry.node.full_slug.includes('article')) {
        const page = {
          path: `${entry.node.full_slug}`,
          component: require.resolve(ArticleTemplate),
          context: {
            story: entry.node,
          },
        };
        createPage(page);
      }
    });
  }

  if (posts) {
    posts.forEach((post, index) => {
      const { frontmatter } = post;
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;
      const page = {
        path: `${post.slug}`,
        component: require.resolve(PostTemplate),
        context: {
          id: post.id,
          title: frontmatter.title,
          description: frontmatter.description,
          label: frontmatter.label,
          date: frontmatter.date,
          tags: frontmatter.tags,
          slug: post.slug,
          previousPostId,
          nextPostId,
        },
      };
      createPage(page);
    });
  }

  // if (pages.length > 0) {
  //   const {
  //     title: siteTitle,
  //     description: siteDescription,
  //     social: socialLinks,
  //     copyright: copyrightMessage,
  //     greeting: siteGreeting,
  //   } = siteMetadata;
  //   const brand = brandLogo;

  //   // Create a page for each Article from "mdx"
  //   pages.forEach((page, index) => {
  //     const slug = page.slug;
  //     const previousPostId = index === 0 ? null : pages[index - 1].id;
  //     const nextPostId =
  //       index === pages.length - 1 ? null : pages[index + 1].id;
  //     if (!slug) {
  //       return false;
  //     }
  //     if (post.templateKey === 'post') {
  //       createPage({
  //         path: slug,
  //         component: require.resolve(PostTemplate),
  //         context: {
  //           id: post.id,
  //           previousPostId,
  //           nextPostId,
  //           siteTitle,
  //           siteDescription,
  //           siteGreeting,
  //           copyrightMessage,
  //           socialLinks,
  //           brand,
  //           newsletter,
  //           slug,
  //         },
  //       });
  //     }
  //   });
  // }
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField, createFilePath } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node);
//     const value = createFilePath({ node, getNode });

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `);
};
