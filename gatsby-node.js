const path = require('path')

const templates = {
  archive: {
    series: path.resolve('./src/templates/archive-series/index.js')
  },
  page: path.resolve('./src/templates/page/index.js'),
  pages: {
    coaching: path.resolve('./src/templates/page-coaching/index.js'),
    home: path.resolve('./src/templates/page-home/index.js'),
    articles: path.resolve('./src/templates/page-articles/index.js'),
    comics: path.resolve('./src/templates/page-comics/index.js'),
    archetypes: path.resolve('./src/templates/page-archetypes/index.js'),
    podcast: path.resolve('./src/templates/page-podcast/index.js'),
    about: path.resolve('./src/templates/page-about/index.js'),
    tools: path.resolve('./src/templates/page-tools/index.js')
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
                  publishDate
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
          .filter(entry => entry.publishDate)

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

  const createComicsPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            comics: allFile(
              filter: {
                extension: {
                  eq: "jpg"
                },
                name: {
                  glob: "*-16x9"
                }
              },
              sort: {
                fields: [relativePath],
                order: DESC
              }
            ) {
              nodes {
                absolutePath
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

        const pages = data.comics.nodes
        const postsPerPage = 27
        const numPages = Math.ceil(pages.length / postsPerPage)

        Array.from({length: numPages}).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/comics` : `/comics/${i + 1}`,
            component: path.resolve("./src/templates/paginate-comics/index.js"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      })
    )
  })

  return Promise.all([
    createPages,
    createArticlePages,
    createArticleSeriesPages,
    createComicsPages
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
