/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
          },
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GaiaX`,
        short_name: `GaiaX`,
        start_url: `/`,
        icon: `src/static/gaiax-logo-small.webp`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
