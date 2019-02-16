import styled from 'styled-components'
import React from 'react'

const UnstyledContentSection = ({
  className
}) => {
  return (
    <section id='content' className={className}>
      
    </section>
  )
}

const ContentSection = styled.div`
  background: white;
`

export default ContentSection