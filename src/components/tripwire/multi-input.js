import React from 'react'
import styled from 'styled-components'
import validator from 'validator'
import {Input} from 'components/form'

const PlaceholderInput = styled(Input)`
  opacity: 0;
  pointer-events: none;
`

const validateValue = (value,type) => {
  if (type === 'email') return validator.isEmail(value)
  return true
}

const UnstyledDynamicInput = ({
  className,
  preset,
  children,
  setFormStatus,
  fields
}) => {
  const handleOnChange = e => {
    const value  = e.target.value
    const valid  = validateValue(value,preset)
    const status = valid ? 'valid' : 'invalid'

    if (preset === 'email') fields.setEmail(value)
    if (preset === 'name') fields.setName(value)

    setFormStatus(status)
  }

  return (
    <Input className={className} onChange={e => handleOnChange(e)} preset={preset}>
      {children}
    </Input>
  )
}

export const DynamicInput = styled(UnstyledDynamicInput)`
  position: absolute;
  left: 0;
  transition: top .2s ease-in-out;
  top: ${({index,activeInputId,theme}) => {
    if (index === activeInputId) return '0'
    if (index < activeInputId) return `calc(-1 * ${theme.padding.mediumLarge})`
    if (index > activeInputId) return theme.padding.mediumLarge
  }};
  width: 100%;
`

const UnstyledMultiInput = ({
  className,
  children
}) => {
  return (
    <div className={className}>
      <PlaceholderInput/>
      {children}
    </div>
  )
}

const MultiInput = styled(UnstyledMultiInput)`
  overflow: hidden;
  display: ${({formStatus}) => formStatus === 'submitted' ? 'none' : 'block'};
`

export default MultiInput