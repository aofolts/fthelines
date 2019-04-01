import React from 'react'
import styled from 'styled-components'
import {Heading,BodyText} from 'components/text'
import Form, {Input,Submit} from 'components/form'

const TextContent = styled.div`
  text-align: center;
`

const CardHeadline = styled(Heading)`
  
`

const CardDescription = styled(BodyText)`

`

const FormWrap = styled.div`
  margin-top: ${props => props.theme.padding.mediumSmall};  
`

const SubscribeForm = styled(Form)`
  display: flex;
  justify-content: flex-start;
`

const EmailInput = styled(Input)`
  flex: 1;
  line-height: 1em;
`
const SubmitButton = styled(Submit)`
  margin-top: 0;
`

const UnstyledResourceCard = ({
  className,
  entry
}) => {
  return (
    <div className={className}>
      <TextContent>
        <CardHeadline level={3}>{entry.fields.headline['en-US']}</CardHeadline>
        <CardDescription level={2}>{entry.fields.teaser['en-US']}</CardDescription>
      </TextContent>
      <FormWrap>
        <SubscribeForm>
          <EmailInput preset='email'/>
          <SubmitButton>{entry.fields.buttonLabel['en-US']}</SubmitButton>
        </SubscribeForm>
      </FormWrap>
    </div>
  )
}

const ResourceCard = styled(UnstyledResourceCard)`
  width: ${props => props.theme.columns(6)};
  max-width: 100%;
  padding: ${props => props.theme.padding.medium};
  background: ${props => props.theme.color.grey.lightest};
`

export default ResourceCard