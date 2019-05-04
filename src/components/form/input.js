import styled from 'styled-components'
import theme from 'components/theme'
import React from 'react'

function getPlaceholder({preset,placeholder}) {
  if (placeholder) return placeholder

  switch (preset) {
    case 'email': return 'email address';
    case 'name': return 'first name';
    default: return null;
  }
}

const UnstyledInput = ({
  className,
  children,
  name,
  onChange,
  onFocus,
  placeholder,
  preset
}) => {
  // todo: type switch

  const props = {
    name: preset || name,
    onChange,
    onFocus,
    placeholder: getPlaceholder({preset,placeholder}),
    type: preset === 'email' ? 'email' : 'text'
  }

  return (
    <input className={className} {...props}>
      {children}
    </input>
  )
}

const Input = styled(UnstyledInput)`
  padding: 1em;
  font-size: ${theme.text.bodyText.fontSize[2]};
  border: 2px solid white;
  box-sizing: border-box;
  background: white;
  min-width: 2px;
  width: 100%;

  &:hover, &:focus {
    border: 2px solid ${props => props.theme.color.primary.medium};
    outline: none;
  }
`

export default Input