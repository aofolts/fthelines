import React from 'react'
import styled from 'styled-components'

const UnstyledUnorderedList = ({
  className,
  children
}) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

export const UnorderedList = styled(UnstyledUnorderedList)`
  font-size: ${props => props.theme.text.size.mediumSmall};
  margin-left: 2em;
  margin-bottom: ${props => props.theme.padding.small};

  & li {
    list-style-type: disc;
  }
`

const UnstyledOrderedList = ({
  className,
  children
}) => {
  return (
    <ol className={className}>
      {children}
    </ol>
  )
}

export const OrderedList = styled(UnstyledOrderedList)`
  font-size: ${props => props.theme.text.size.mediumSmall};
  margin-left: 1em;
  margin-bottom: ${props => props.theme.padding.small};

  & li {
    list-style-type: decimal;
  }
`

export const ListItem = styled.li`
  margin-bottom: .5em;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }

  & p {
    margin-bottom: 0;
    display: inline;
  }
`