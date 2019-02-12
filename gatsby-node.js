const path = require('path')

const templates = {
  page: path.resolve('./src/templates/page/index.js'),
  pages: {
    home: path.resolve('./src/templates/page-home/index.js'),
  },
  single: {
    article: path.resolve('./src/templates/single-article/index.js')
  }
}

exports.createPages = ({graphql,actions}) => {
  const {
    createPage
  } = actions

  const createPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulPage {
              edges {
                node {
                  slug
                  layout {
                    __typename
                  }
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
 
        const pages = data.pages.edges.map(entry => entry.node)

        const getPageTemplate = entry => {
          // gatsby-source-contentful single reference field bug
          const layoutType = entry.layout[0]['__typename']

          if (layoutType === 'ContentfulHomePageLayout') return templates.pages.home
          return templates.pages[entry.slug] || templates.page
        }

        const getPagePath = entry => {
          return entry.slug === 'home' ? '/' : `/${entry.slug}`
        }

        pages.forEach(entry => {
          createPage({
            path: getPagePath(entry),
            component: getPageTemplate(entry),
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  const createArticlePages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulArticle {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        const pages = data.pages.edges.map(entry => entry.node)

        pages.forEach(entry => {
          createPage({
            path: `/stories/${entry.slug}`,
            component: templates.single.article,
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  return Promise.all([
    createPages,
    createArticlePages
  ])
}

// Allow for imports relative to src
exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve('./src'), 
        'node_modules'
      ],
    },
    stats: {
      moduleTrace: false,
    }
  })
}