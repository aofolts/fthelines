import styled,{css} from 'styled-components'
import React,{useState} from 'react'
import {Input,Submit} from 'components/form'
import {Heading,BodyText} from 'components/typography'
import axios from 'axios'

const EmailInput = styled(Input)`

`

const SubscribeForm = styled.form`
  display: flex;
  align-items: flex-start;
`

const Teaser = styled(BodyText)`
  text-align: center;
  margin-bottom: ${props => props.theme.padding.mediumSmall};
`

const FormHeadline = styled(Heading)`
  margin-top: 0;
  text-align: center;
`

function handleSubmit({
  event,
  email,
  formId,
  setFormState
}) {
  event.preventDefault()

  axios.post(`https://api.convertkit.com/v3/forms/${formId['en-US']}/subscribe`, {
    email,
    api_key: 'MT-C9Q-Ur9ZDZuBgfZK3yg'
  }).then(r => {
    setFormState('submitted')
  })
}

const SubmissionMessage = styled(BodyText)`
  margin-bottom: 0;
  text-align: center;
`

const UnstyledSubscribeForm = ({
  className,
  entry
}) => {
  const fields = entry.fields
  const [email,setEmail] = useState('')
  const [formState,setFormState] = useState('empty')

  function formContent() {
    if (formState === 'empty') {
      return (
        <div>
          <FormHeadline level={3}>{fields.headline['en-US']}</FormHeadline>
          <Teaser>{fields.teaser['en-US']}</Teaser>
          <SubscribeForm onSubmit={e => handleSubmit({event: e, ...fields,email: email,setFormState})}>
            <EmailInput preset='email' onChange={e => setEmail(e.target.value)}/>
            <FormSubmit>Subscribe</FormSubmit>
          </SubscribeForm>
        </div>
      )
    } else if (formState === 'submitted') {
      return (
        <div>
          <FormHeadline level={3}>Awesome, thanks for subscribing!</FormHeadline>
          <SubmissionMessage>In just a bit you'll get an email from me "Andrew at F the Lines"—so watch out for that. Cheers.</SubmissionMessage>
        </div>
      )
    } else {
      return 'test'
    }
  }

  return (
    <div className={className}>
      {formContent()}
    </div>
  )
}

const FormSubmit = styled(Submit)`
  margin-top: 0;
`

const FormContainer = styled(UnstyledSubscribeForm)`
  ${props => props.isEmbedded === true ? css`
    padding: ${props => props.theme.padding.mediumSmall};
    background: ${props => props.theme.color.grey.lightest};
    margin: ${props => props.theme.padding.mediumSmall} 0;
  ` : null}
`

export default FormContainer