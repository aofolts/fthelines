import React from 'react'
import styled from 'styled-components'
import Button from 'components/button'

const UnstyledNavigation = ({
  className,
  numPages,
  currentPage
}) => {
  const previousLink = (() => {
    if (currentPage > 2) return `/comics/${currentPage - 1}`
    if (currentPage == 2) return '/comics'
  })()

  const nextLink = (() => {
    if (currentPage < numPages) return `/comics/${currentPage + 1}`
  })()

  return (
    <div className={className}>
      <Wrap>
        <Buttons>
          <Button to={previousLink}>← Previous</Button>
          <NextButton to={nextLink} nextLink={nextLink}>Next →</NextButton>
        </Buttons>
      </Wrap>
    </div>
  )
}

const NextButton = styled(Button)`
  opacity: ${props => props.nextLink ? 1 : 0};
`

const Navigation = styled(UnstyledNavigation)`
  padding: ${props => props.theme.padding.default};
  display: flex;
  justify-content: center;
`

const Wrap = styled.div`
  width: ${props => props.theme.columns(4)};
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Navigation