const contentPath = 'content/post';
const assetPath = 'content/assets';
const mdx = true;

module.exports = {
  siteMetadata: {
    title: `Demo for Netlify CMS`,
    author: `Reuben Ellis`,
    description: `Welcome to a Different World`,
    greeting: ``,
    copyright: `Copyright © 2021 Reuben Ellis LLC`,
    newsletterTitle: '',
    social: {
      facebook: 'https://www.facebook.com/reuben.ellis.338',
      twitter: '',
      instagram: 'https://www.instagram.com/devellistech',
      github: 'https://www.github.com/ethriel3695',
      email: 'mailto:ethriel3695@gmail.com',
    },
    hasNotifications: false,
    categories: [
      'react',
      'gatsby',
      'gatsbyjs',
      'themes',
      'web development',
      'contentful',
      'production',
      'tailwindcss',
      'storybook',
    ],
  },
  plugins: [
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'wOqc7QZd3KhhYEc1tehr5wtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `rebeccapurple`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     tailwind: true,
    //     printRejected: true,
    //     ignore: ['src/styles/global.css'],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {
    //     analyzerPort: 8888,
    //     analyzerMode: 'server',
    //     defaultSizes: 'gzip',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
        name: 'Posts directly in Repository',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: assetPath,
        name: assetPath,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Navigation',
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: false,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     // your google analytics tracking id
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // enable ip anonymization
    //     anonymize: true,
    //     defer: true,
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reuben Ellis`,
        icon: `content/assets/logo/logo.jpg`,
        short_name: `Reuben Ellis`,
        start_url: `/`,
        background_color: `#2C5282`,
        theme_color: `#2C5282`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
  ].filter(Boolean),
};
