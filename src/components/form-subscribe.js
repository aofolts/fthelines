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

SubscribeForm.defaultProps = {
  settings: {
    format: 'inline'
  }
}

// const Teaser = styled(BodyText)`
//   text-align: center;
//   margin-bottom: ${props => props.theme.padding.mediumSmall};
// `

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

  axios.post(`/.netlify/functions/subscribe`, {
    email
  }).then(r => {
    setFormState('submitted')
  })
}

const SubmissionMessage = styled(BodyText)`
  margin-bottom: 0;
  text-align: center;
`

const FormContent = styled.div`
  width: 100%;
  max-width: 100%;
`

const UnstyledSubscribeForm = ({
  className,
  entry,
  settings
}) => {
  console.log(process.env)
  const fields = entry.fields
  const [email,setEmail] = useState('')
  const [formState,setFormState] = useState('empty')

  const headlineLevel = settings && settings.sizing === 'large' ? 2 : 3
  const teaserLevel = settings && settings.sizing === 'large' ? 1 : 2

  const formId = entry.formId || fields.formId['en-US']

  function formContent() {
    if (formState === 'empty') {
      // const headline = (settings && settings.headline === false)
      //   ? null
      //   : <FormHeadline level={headlineLevel}>{entry.headline || fields.headline['en-US']}</FormHeadline>

      // const teaser = (settings && settings.teaser === false)
      //   ? null
      //   : <Teaser level={teaserLevel}>{(entry.teaser && entry.teaser.text) || fields.teaser['en-US']}</Teaser>

      return (
        <FormContent>
          <SubscribeForm onSubmit={e => handleSubmit({event: e, ...fields,formId,email: email,setFormState})}>
            <EmailInput preset='email' onChange={e => setEmail(e.target.value)}/>
            <FormSubmit>Subscribe</FormSubmit>
          </SubscribeForm>
        </FormContent>
      )
    } else if (formState === 'submitted') {
      return (
        <FormContent>
          <FormHeadline level={headlineLevel}>Awesome, thanks for subscribing!</FormHeadline>
          <SubmissionMessage level={teaserLevel}>In just a bit you'll get an email from me "Andrew at F the Lines"—so watch out for that. Cheers.</SubmissionMessage>
        </FormContent>
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