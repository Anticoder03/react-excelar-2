import React from 'react'
import './css/Button.css'
const Button = (props) => {
    const backgroundColor = props.backgroundColor || 'blue'
    const color = props.color || 'white'
  return (
    <div>
      <button onClick={props.handleClick} style={{ backgroundColor, color }}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
