import React from 'react'
import styled from 'styled-components'

const BrandName = styled.div`
  color: #222222;
  font-weight: 500;
  letter-spacing: .2em;

  &:after {
    width: 110%;
    content: '';
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: black;
    opacity: .2;
    transform: translate(-50%,-50%);
  }
`

const CodeTag = styled.div`
  color: #ccc;
`

const UnstyledBrand = ({
  className
}) => {
  return (
    <div id='nav-main-brand' className={className}>
      <BrandName>F THE LINES</BrandName>
    </div>
  )
}

const Brand = styled(UnstyledBrand)`
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  font-family: 'Source Code Pro';
`

export default Brand