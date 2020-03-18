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

module.exports = {
  siteMetadata: {
    title: 'F the Lines',
    siteUrl: `https://www.fthelines.com`
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
    },
    {
      resolve: `gatsby-source-notion-contents`,
      options: {
        token: '70e72aec41ea7bae13629223a1aa93d05697250c182ceeed5621365bd2d6c1f4b418f10f0bfb097e94c19cb1e18bdc1386b1aa1cfa38dacc7697dc2fde92090872a4197f6d8d2a30e1084df61fdf',
        ids: ['2a82a3ebe5f34c5cbdfb29daf87c1fbe','7cea40c52c50474c99f002be6c9e4623'],
        prefix: '/',
        removeStyle: false,
      },
    },
  ]
}
