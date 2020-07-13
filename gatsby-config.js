require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `gatsby-apple-store-uk`,
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        apiVersion: `2020-07`,
        verbose: true,
        paginationSize: 250,
        includeCollections: [`shop`, `content`]
      }
    }
  ]
};
