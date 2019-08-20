import React from 'react'
import styled from 'styled-components'
import {BodyText} from 'components/typography'

const UnstyledDivider = ({
  className
}) => {
  return (
    <BodyText className={className}>. . .</BodyText>
  )
}

const Divider = styled(UnstyledDivider)`

`

export const MiniDivider = ({
  className
}) => {
  return <Divider className={className}/>
}

export default Divider