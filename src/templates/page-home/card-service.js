import React from 'react'
import styled from 'styled-components'
import {
  Heading,
  BodyText,
  ActionLink
} from 'components/type'
import BackgroundImage from 'components/image-background'

const Media = styled.div`
  width: ${props => props.theme.columns(2)};
  height: ${props => props.theme.columns(2)};
  border-radius: 1000px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.padding.small};
  margin-left: auto;
  margin-right: auto;
  border: 1rem solid ${props => props.theme.color.primary.lightest};
`

const Copy = styled.div`
  display: block;
`

const UnstyledServiceCard = ({
  className,
  entry
}) => {
  return (
    <div className={className}>
      <Media>
        <BackgroundImage data={entry.image}/>
      </Media>
      <Copy>
        <Heading as='h3' level='3'>{entry.title}</Heading>
        <BodyText level='2'>{entry.details}</BodyText>
        <ActionLink>{entry.cta}</ActionLink>
      </Copy>
    </div>
  )
}

const ServiceCard = styled(UnstyledServiceCard)`
  display: block;
  text-align: center;
`

export default ServiceCard