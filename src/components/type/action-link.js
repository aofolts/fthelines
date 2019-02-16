import styled from 'styled-components'
import Link from 'components/link'
import React from 'react'
// import Icon from 'components/icon'

// const ArrowContainer = styled.div`
//   display: inline-block;
//   width: 2em;
//   height: .66em;
// `

// const UnstyledArrowIcon = ({
//   className
// }) => {
//   return (
//     <Icon name='arrow' className={className}/>
//   )
// }

// const Arrow = styled(UnstyledArrowIcon)`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%,-50%);
//   width: 100%;
//   height: 100%; 

//   line, polyline {
//     stroke: red;
//     stroke-width: 3px;
//     fill: none;
//   }
// `

const UnstyledActionLink = ({
  children,
  ...linkProps
}) => {
  return (
    <Link {...linkProps}>{children}</Link>
  )
}

export const ActionLink = styled(UnstyledActionLink)`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  display: inline-block;
  border-bottom: 2px solid #EBDA12;
  cursor: pointer;

  &:hover {
    font-style: italic;
  }
`

export default ActionLink