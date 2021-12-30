/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Zoran Janjic portfolio",
    description: "Zoran Janjic portfolio",
    titleTemplate: `%s | ZJ portfolio`,
    url: "https://zoran-janjic.netlify.app",
    twitterUsername: "@janjiczoran23",
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337/api`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `job`,
            endpoint: `jobs/?populate=desc`,
          },
        ],
        // singleTypes: [`home-page`, `contact`],
      },
    },
  ],
};
