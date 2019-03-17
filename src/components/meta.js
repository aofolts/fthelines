import {Helmet} from 'react-helmet'
import {getPageUrl} from 'utilities/router'
import React from 'react'
import PropTypes from 'prop-types'

const PageMeta = page => {
  const {
    meta
  } = page

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta charSet="UTF-8"/>
      <meta name='description' content={meta.description.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta property="og:title" content={meta.title}></meta>
      <meta property="og:description" content={meta.description.description}/>
      <meta property="og:image" content={page.coverImage.fluid.src}/>
      <meta property="og:url" content={getPageUrl(page)}/>
    </Helmet>
  )
}

PageMeta.propTypes = {
  page: PropTypes.shape({
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.shape({
        description: PropTypes.string.isRequired
      }),
    }),
    coverImage: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string.isRequired
      })
    })
  })
}

export default PageMeta