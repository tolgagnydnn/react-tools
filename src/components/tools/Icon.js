import React from 'react'
import * as FontAwesome from "react-icons/fa";

function Icon({iconName, size}) {
  const icon = React.createElement(FontAwesome[iconName]);
  return (
    <div style={{ fontSize: size }}>{icon}</div>
  )
}

export default Icon
