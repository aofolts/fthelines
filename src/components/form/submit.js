import React from 'react'
import styled from 'styled-components'
import Button from 'components/button'

const UnstyledSubmit = ({
  className,
  children,
  onClick
}) => {
  return (
    <Button className={className} type='submit' tag='button' onClick={onClick}>
      {children}
    </Button>
  )
}

const Submit = styled(UnstyledSubmit)`
  
`

export default Submit