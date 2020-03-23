import React from 'react'
import styled from 'styled-components'
import {Submit} from 'components/form'

const UnstyledSubscribeButton = ({
  className,
  formStatus,
  activeInputId,
  setActiveInputId
}) => {
  const buttonLabel = () => {
    if (formStatus === 'submitting') return 'Submitting...'
    if (formStatus === 'submitted') return 'Success!'
    if (
      (formStatus === 'inactive' || activeInputId === 1) ||
      (formStatus === 'invalid' || activeInputId === 1)
    ) return 'Subscribe'
    return 'Next →'
  }

  const handleSubmitClick = e => {
    if (formStatus === 'valid' && activeInputId === 1) return null

    e.preventDefault()

    if (activeInputId < 1) setActiveInputId(activeInputId + 1)
  }

  return (
    <Submit id='hero-button' className={className} onClick={e => handleSubmitClick(e)} type="submit">
      {buttonLabel()}
    </Submit>
  )
}

const SubscribeButton = styled(UnstyledSubscribeButton)`
  margin-top: 0;
  cursor: ${({formStatus}) => {
    if (['invalid','inactive'].includes(formStatus)) return 'not-allowed'
    return 'pointer'
  }};
`

export default SubscribeButton