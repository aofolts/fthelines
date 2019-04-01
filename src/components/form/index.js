import React from 'react'
import styled from 'styled-components'
import Input from './input'
import Submit from './submit'

const UnstyledForm = ({
  className,
  children  
}) => {
  return (
    <form className={className}>
      {children}
    </form>
  )
}

const Form = styled(UnstyledForm)`
  
`

export default Form

export {
  Input,
  Submit
}