import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/typography'
import Button from 'components/button'

const UnstyledServiceCard = ({
  className,
  entry
}) => {
  return (
    <div className={className}>
      <Heading level={3}>{entry.name}: {entry.sessions} week{entry.sessions > 1 ? 's' : null}</Heading>
      <Description level={2} dangerouslySetInnerHTML={{__html: entry.description}}/>
      <Button>Book {entry.name} (${entry.price})</Button>
    </div>
  )
}

const ServiceCard = styled(UnstyledServiceCard)`
  
`

const Description = styled(BodyText)`
  
`

export default ServiceCard