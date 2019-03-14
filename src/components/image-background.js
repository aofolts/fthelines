import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

const UnstyledBackgroundImage = ({
  className,
  data,
  test
}) => {
  const props = {
    className,
    ...data,
    style: {
      position: 'absolute'
    }
  }

  if (!props.alt) props.alt = props.title

  return (
    <Image {...props}/>
  )
}

UnstyledBackgroundImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
}

const BackgroundImage = styled(UnstyledBackgroundImage)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: ${props => props.filter === 'dark' ? `brightness(.62)` : null};
`

export default BackgroundImage