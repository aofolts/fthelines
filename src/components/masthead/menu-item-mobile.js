import React from 'react'
import styled from 'styled-components'
import {BodyText} from 'components/typography'
import Link from 'components/link'

const UnstyledTitle = ({
  className,
  children,
  entry,
  url
}) => {
  return (
    <Link className={className} to={entry.slug}>
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
  font-size: ${props => props.theme.padding.mediumSmall};

  ${props => props.theme.media.phone`
    font-size: ${props => props.theme.padding.small};
  `}

  & + & {
    margin-top: ${props => props.theme.padding.small};
  }
`

export default DesktopMenuItem


