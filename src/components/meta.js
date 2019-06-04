import {Helmet} from 'react-helmet'
import {getPageUrl} from 'utilities/router'
import React from 'react'
import favicon from 'images/favicon.png'

const getTitle = ({title,page}) => {
  if (title) return title
  if (page.meta) return page.meta.title
  return page.title
}

const PageMeta = ({
  page,
  title,
  description,
  image
}) => {
  const meta =  {
    title: getTitle({title,page}),
    description: description || page.meta.description.description,
    image: {
      url: image && image.url ? image.url : page.coverImage.fluid.src
    }
  }

  const imgUrl = meta.image.url.indexOf('http') > 0 ? meta.image.url : `https:${meta.image.url}` 

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta charSet="UTF-8"/>
      <meta name='description' content={meta.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel='shortcut icon' type='image/png' href={favicon}/>
      <meta property="og:title" content={meta.title}></meta>
      <meta property="og:description" content={meta.description}/>
      <meta property="og:image" content={imgUrl}/>
      <meta property="og:url" content={getPageUrl(page)}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@fthelines"/>
      <meta name="twitter:creator" content="@fthelines"/>
      <meta name="twitter:title" content={meta.title}/>
      <meta name="twitter:description" content={meta.description}/>
      <meta name="twitter:image" content={imgUrl}/>
    </Helmet>
  )
}

export default PageMeta