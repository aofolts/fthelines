import React from 'react'
import styled from 'styled-components'
import Button from 'components/button'

const UnstyledSubmit = ({
  className,
  children
}) => {
  return (
    <Button className={className}>
      {children}
    </Button>
  )
}

const Submit = styled(UnstyledSubmit)`
  
`

export default Submit