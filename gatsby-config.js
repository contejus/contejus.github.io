/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Tejus Mathew",
    titleTemplate: "Tejus Mathew",
    description:
      "A personal website for Tejus Mathew's projects, coursework, and Cydia repo.",
    url: "https://www.contejus.github.io", // No trailing slash allowed!
    image: "/src/images/favicon.png", // Path to your image you placed in the 'static' folder
    githubUsername: "contejus",
  },
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
    },
    'gatsby-plugin-offline'
  ]
}
