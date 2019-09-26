import React from 'react'
import Link from 'components/link'
import {normalizeEntry} from 'utilities/data'

const renderEntryHyperlink = (node,children) => {
  if (!node.data.target.fields) return children

  const entry = normalizeEntry(node.data.target)

  const linkProps = {
    entry
  }

  return <Link {...linkProps}>{children}</Link>
}

const renderHyperlink = (node,children) => {
  return <a href={node.data.uri} target='__blank'>{children}</a>
}

export {
  renderEntryHyperlink,
  renderHyperlink
}