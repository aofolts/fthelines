import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {getEntryType} from 'utilities/data'

// export const getPagePathBase = page => {
//   switch (page.type) {
//     case 'article': return '/articles'
//     case 'articleSeries': return '/series'
//     default: return 'broken-link'
//   }
// }



export const getEntryPath = entry => {
  if (!entry) return false
  if (!entry.isPublished) return false

  let base = ''
  let slug = entry.slug
  const entryType = entry.type

  if (entryType) {
    switch (entryType) {
      case 'article': base = '/articles'; break;
      case 'articleSeries': base = '/series'; break;
      case 'podcastEpisode': base = '/podcast'; break;
      case 'page': base = ''; break;
      default: return false;
    }
  }

  if (slug === 'home') slug = ''

  return `${base}/${slug}`
}

export const getPageUrl = page => {
  const path = module.exports.getPagePath(page)

  return `https://www.fthelines.com${path}`
}

const Link = ({
  entry,
  to,
  url,
  href,
  className,
  children,
  fallbackTag,
  ...props
}) => {
  let LinkTag = fallbackTag ? fallbackTag : 'button'
  const entryType = getEntryType(entry)
  const linkProps = {
    className,
    ...props
  }

  if (entry) {
    const entryPath = getEntryPath(entry)
    
    // Is published and has path
    if (entryPath) {
      linkProps.to = entryPath
      
      return <GatsbyLink {...linkProps}>{children}</GatsbyLink>
    }

    if (entryType === 'subscribeForm') {
      linkProps.href = entry.url
      linkProps.target = '__blank'
    }

    return <a {...linkProps}>{children}</a>
  }

  if (to) {
    linkProps.to = to

    return <GatsbyLink {...linkProps}>{children}</GatsbyLink>
  }
  
  if (url) {
    if (url[0] === '/') {
      linkProps.to = url
    }
    else {
      linkProps.target = url.indexOf('mailto') > -1 ? null : '__blank'
      linkProps.href = url
    }

    return <a {...linkProps}>{children}</a>
  }

  return <LinkTag {...linkProps}>{children}</LinkTag>
}

Link.propTypes = {
  url: PropTypes.string
}

export default Link

const UnstyledInlineLink = ({
  children,
  ...props
}) => {
  return (
    <Link fallbackTag='span' {...props}>
      {children}
    </Link>
  )
}

export const InlineLink = styled(UnstyledInlineLink)`
  font-family: underlined;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.primary.medium};
  }
`