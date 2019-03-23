import React from "react"

const DynamicComponent = ({ tag = "div", children, ...props }) => {
  const Tag = tag 
  return <Tag {...props}>{children}</Tag>
}

DynamicComponent.defaultProps = {
  tag: "div"
}

export default DynamicComponent