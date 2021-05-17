module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-graphql",
      options:{
        typeName: "SpaceX",
        fieldName: "spacex",
        url: "https://api.spacex.land/graphql/"
      }
    }
  ],
}
