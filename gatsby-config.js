let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || contentfulConfig.accessToken,
  environment: 'master'
}

const { 
  spaceId, 
  accessToken,
  environment
} = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

var {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'F the Lines',
    siteUrl: `https://www.fthelines.com`
  },
  // For avoiding CORS while developing Netlify Functions locally
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
        environment,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49711355-3",
        head: false,
        anonymize: true,
        respectDNT: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `comics`,
        path: `${__dirname}/src/daily-log/`,
        ignore: [`^.*\.(?!jpg$)[^.]+$`],
      },
    }
  ]
}