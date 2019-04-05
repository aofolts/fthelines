import {Helmet} from 'react-helmet'
import {getPageUrl} from 'utilities/router'
import React from 'react'

const PageMeta = ({
  page,
  title,
  description,
  image
}) => {
  const meta = page.meta ? {
    title: page.meta.title,
    description: page.meta.description.description,
    image: {
      url: page.coverImage.fluid.src
    }
  } : {
    title: title || page.title,
    description,
    image
  }

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta charSet="UTF-8"/>
      <meta name='description' content={meta.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta property="og:title" content={meta.title}></meta>
      <meta property="og:description" content={meta.description}/>
      <meta property="og:image" content={meta.image.url}/>
      <meta property="og:url" content={getPageUrl(page)}/>
    </Helmet>
  )
}

export default PageMeta