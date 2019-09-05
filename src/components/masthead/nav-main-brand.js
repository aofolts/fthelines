import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import logo from 'svg/fthelines-logo.svg'

// const lineStyle = css`
//   &:after {
//     width: 100%;
//     content: '';
//     height: 2px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     background: #333;
//     transform: translate(-50%,-50%);
//   }
// `

// const BrandName = styled(Link)`
//   color: #333;
//   font-weight: 700;
//   letter-spacing: .1em;
//   background: #EBDB11;
//   padding: .2em .4em;
//   line-height: 1em;
//   font-family: nitti,monospace;

//   &:hover {
//     ${lineStyle}
//   }
// `

const UnstyledBrandLogo = ({
  className
}) => {
  return (
    <Link to='/' className={className}>
      <BrandLogoIcon/>
    </Link>
  )
}

const BrandLogo = styled(UnstyledBrandLogo)`
  width: 100%;
  height: 100%;
  display: block;

  ${props => props.theme.media.phone`

  `}
`

const UnstyledBrandLogoIcon = ({
  className
}) => {
  return (
    <svg id='header-logo' className={className}>
      <use xlinkHref={`#${logo.id}`}/>
    </svg>
  )
}

const BrandLogoIcon = styled(UnstyledBrandLogoIcon)`
  height: 100%;
  width: 28rem;

  ${props => props.theme.media.belowDesktop`
    width: 20rem;
  `}
`

const UnstyledBrand = ({
  className
}) => {
  return (
    <div id='nav-main-brand' className={className}>
      {/* <BrandName to='/'>F THE LINES</BrandName> */}
      <BrandLogo/>
    </div>
  )
}

const Brand = styled(UnstyledBrand)`
  display: block;
  height: 70%;
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  font-family: nitti, monospace;
  font-weight: 700;
`

export default Brand