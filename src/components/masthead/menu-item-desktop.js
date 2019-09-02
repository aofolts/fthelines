import React from 'react'
import styled from 'styled-components'
import {BodyText} from 'components/typography'
import Link from 'components/link'

const UnstyledTitle = ({
  className,
  children,
  entry
}) => {
  return (
    <Link className={className} to={entry.slug} url={entry.url}>
      {children}
    </Link>
  )
}

const Title = styled(UnstyledTitle)`
  font-family: typewriter !important;
  text-transform: text-transform: uppercase;;
`

const UnstyledDesktopMenuItem = ({
  className,
  entry
}) => {
  return (
    <BodyText className={className} level={2} as='li'>
      <Title entry={entry}>{entry.title}</Title>
    </BodyText>
  )
}

const DesktopMenuItem = styled(UnstyledDesktopMenuItem)`
  list-style-type: none;
  margin-bottom: 0;

  & + & {
    margin-left: ${props => props.theme.padding.small};
  }
`

export default DesktopMenuItem


