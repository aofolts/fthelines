import React from 'react'
import styled from 'styled-components'
import {BodyText} from 'components/typography'
import {ArticleTitle} from 'templates/single-story/header'

const SeriesTitle = styled(ArticleTitle)`
  text-align: center;
`

const Wrap = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.columns(10)};
`

const SeriesDescription = styled(BodyText)`
  width: ${props => props.theme.columns(7)};
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`

const UnstyledHeader = ({
  className,
  entry
}) => {
  return (
    <section className={className}>
      <Wrap>
        <SeriesTitle>Series: {entry.title}</SeriesTitle>
        <SeriesDescription>{entry.description.description}</SeriesDescription>
      </Wrap>
    </section>
  )
}

const Header = styled(UnstyledHeader)`
  background: ${props => props.theme.color.grey.lightest};
  padding: ${props => props.theme.padding.default};
  padding-bottom: 0;
`

export default Header