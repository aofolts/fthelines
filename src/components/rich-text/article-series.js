import React from 'react'
import styled from 'styled-components'
import {ListItem,OrderedList} from 'components/typography'
import {InlineLink} from 'components/link'

const UnstyledEmbeddedArticleSeries = ({
  className,
  entry
}) => {
  const items = entry.fields.articles['en-US'].map(entry => {
    const LinkComponent = entry.fields && entry.sys.revision ? InlineLink : 'span'
    const key = entry.fields.id ? entry.fields.id['en-US'] : entry.fields.slug['en-US']

    entry.test = 'series'

    return (
      <ListItem key={key}>
        <LinkComponent page={entry}>
          {entry.fields ? entry.fields.shortName['en-US'] : 'TK'}
        </LinkComponent>
      </ListItem>
    )
  })

  return (
    <OrderedList className={className}>
      {items}
    </OrderedList>
  )
}

const EmbeddedArticleSeries = styled(UnstyledEmbeddedArticleSeries)`
  
`

export {
  EmbeddedArticleSeries
}