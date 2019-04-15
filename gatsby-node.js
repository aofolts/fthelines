const path = require('path')

const templates = {
  archive: {
    series: path.resolve('./src/templates/archive-series/index.js')
  },
  page: path.resolve('./src/templates/page/index.js'),
  pages: {
    home: path.resolve('./src/templates/page-home/index.js'),
    articles: path.resolve('./src/templates/page-articles/index.js')
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
 
        const pages = data.pages.edges
          .map(entry => entry.node)

        const getPageTemplate = entry => {
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
            path: `/articles/${entry.slug}`,
            component: templates.single.article,
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  const createArticleSeriesPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulArticleSeries {
              edges {
                node {
                  title
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
            path: `/series/${entry.slug}`,
            component: templates.archive.series,
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

// exports.onCreatePage = ({ page, actions }) => {
//   const { deletePage, createPage } = actions

//   return new Promise(resolve => {
//     if (page.componentPath === `${__dirname}/src/templates/index/index.js`) {
//       deletePage(page)

//       createPage({
//         ...page,
//         path: '/',
//       })
//     }

//     resolve()
//   })
// }