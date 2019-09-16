import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const getPagePathBase = page => {
  switch (page.type) {
    case 'article': return '/articles'
    case 'articleSeries': return '/series'
    default: return 'broken-link'
  }
}

export const getPagePath = ({
  page
}) => {
  if (!page) return null
  if (!(page.publishDate || page.fields)) return null
  if (page.fields && !page.fields.publishDate) return null

  let base = ''
  let slug = page.slug || page.fields.slug['en-US']

  if (page['__typename']) {
    switch (page['__typename']) {
      case 'ContentfulArticle': base = '/articles'; break;
      case 'ContentfulArticleSeries': base = '/series'; break;
      case 'ContentfulPodcastEpisode': base = '/podcast'; break;
      default: base = '';
    }
  }

  if (page.type) { base = getPagePathBase(page) }

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
  children,
  fallbackTag
}) => {
  const FallbackTag = fallbackTag ? fallbackTag : 'div'
  const path = getPagePath({page})

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
  if (page && path) {
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
      const target = url.indexOf('mailto') > -1 ? null : '__blank'

      return (
        <a
          className={className}
          href={url}
          target={target}
        >
          {children}
        </a>
      )
    }
  }

  return <FallbackTag {...{ className }}>{children}</FallbackTag>
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