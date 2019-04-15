import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import PropTypes from 'prop-types'

export const getPagePathBase = page => {
  switch (page.type) {
    case 'article': return '/articles'
    case 'articleSeries': return '/series'
    default: return 'broken-link'
  }
}

export const getPagePath = page => {
  let base = ''
  let slug = page.slug

  if (page['__typename']) {
    switch (page['__typename']) {
      case 'ContentfulArticle': base = '/articles'; break;
      case 'ContentfulArticleSeries': base = '/series'; break;
      default: base = '';
    }
  }

  if (page.type) {base = getPagePathBase(page)}

  if (slug === 'home') slug = ''

  return `${base}/${slug}`
}

export const getPageUrl = page => {
  const path = module.exports.getPagePath(page)

  return `https://www.fthelines.com${path}`
}

const Link = ({
  page,
  to,
  url,
  className,
  children
}) => {
  if (to) {
    return (
      <GatsbyLink 
        className={className}
        to={to}
      >
        {children}
      </GatsbyLink>
    )
  }
  if (page) {
    const path = getPagePath(page)

    return (
      <GatsbyLink 
        className={className}
        to={path}
      >
        {children}
      </GatsbyLink>
    )
  }
  if (url) {
    if (url[0] === '/') {
      return (
        <GatsbyLink 
          className={className}
          to={url}
        >
          {children}
        </GatsbyLink>
      )
    }
    else {
      return (
        <a 
          className={className}
          href={url}
          target='__black'
        >
          {children}
        </a>
      )
    }
  }
  return <div {...{className}}>{children}</div>
}

Link.propTypes = {
  url: PropTypes.string
}

export default Link