import React, {useState,Fragment} from 'react'
import styled from 'styled-components'
import {MicroText,BodyText} from 'components/typography'
import axios from 'axios'
import Form from './form'
import MultiInput,{DynamicInput} from './multi-input'
import SubscribeButton from './subscribe-button'

const TripwireTeaser = styled(MicroText)`
`

function handleSubmit({
  event,
  email,
  name,
  formId,
  setFormStatus
}) {
  event.preventDefault()

  setFormStatus('submitting')

  axios.post(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    email,
    first_name: name,
    api_key: 'MT-C9Q-Ur9ZDZuBgfZK3yg'
  }).then(r => {
    setFormStatus('submitted')
  })
}

const ThankYouMessage = styled(BodyText)`
  margin-bottom: 0;
  display: ${({formStatus}) => formStatus === 'submitted' ? 'block' : 'none'};
`

const UnstyledTripewire = ({
  className,
  data
}) => {
  const {
    formId,
    teaser
  } = data

  const [activeInputId,setActiveInputId] = useState(0)
  const [formStatus,setFormStatus] = useState('inactive')
  const [email,setEmail] = useState(null)
  const [name,setName] = useState(null)

  const form = {
    fields: {
      email,
      name,
      setEmail,
      setName
    },
    formId,
    setStatus: setFormStatus,
    status: formStatus
  }

  const inputProps = {
    setFormStatus,
    formStatus,
    activeInputId,
    setActiveInputId,
    ...form
  }

  return (
    <div id='hero-tripwire' className={className}>
      {teaser ? <TripwireTeaser>Get 100% actionable advice. No filler.</TripwireTeaser> : null}
      <Form id='hero-form' onSubmit={event => handleSubmit({event,email,name,formId,setFormStatus})}>
        <MultiInput {...inputProps}>
          <DynamicInput preset='email'  index={0} {...inputProps}/>
          <DynamicInput preset='name' index={1} {...inputProps}/>
        </MultiInput>
        <SubscribeButton {...{activeInputId,setActiveInputId,...inputProps}}>Subscribe</SubscribeButton>
        <ThankYouMessage {...inputProps}>Thanks, {name}! Check your inbox to confirm your subscription. :)</ThankYouMessage>
      </Form>
    </div>
  )
}

const Tripwire = styled(UnstyledTripewire)`
  margin-top: ${props => props.theme.padding.smallest};
`

export default Tripwire