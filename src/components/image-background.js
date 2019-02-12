import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import Image from 'gatsby-image'

const UnstyledBackgroundImage = ({
  className,
  data
}) => {
  return (
    <img src={data.src} className={className} alt='todo'/>
  )
}

const BackgroundImage = styled(UnstyledBackgroundImage)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  object-fit: cover
  width: 100%;
  height: 100%;;
`

export default BackgroundImage

// const BackgroundImage = ({
//   title,
//   alt,
//   className,
//   fluid,
//   fixed
// }) => {
//   return (
//     <Image 
//       {...{title,alt,fluid,fixed}}
//       className={['mediaBackground',className].join(' ')}
//       style={{position: 'absolute'}}
//     />
//   )
// }

// BackgroundImage.propTypes = {
//   title: PropTypes.string,
//   alt: PropTypes.string.isRequired
// }

// export default BackgroundImage