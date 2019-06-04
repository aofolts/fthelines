module.exports = {
  getPagePath: page => {
    let base = ''
    let slug = page.slug
  
    if (page['__typename']) {
      switch (page['__typename']) {
        case 'ContentfulArticle': base = '/articles'; break;
        case 'ContentfulArticleSeries': base = '/series'; break;
        default: base = '';
      }
    }
  
    if (slug === 'home') slug = ''
  
    return `${base}/${slug}`
  },
  getPageUrl: page => {
    const path = module.exports.getPagePath(page)
  
    return `https://www.fthelines.com${path}`
  }
}
