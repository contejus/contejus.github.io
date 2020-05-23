/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tejus Mathew`,
        short_name: `Tejus Mathew`,
        start_url: `/`,
        background_color: `#003366`,
        theme_color: `#003366`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    }
  ]
}
