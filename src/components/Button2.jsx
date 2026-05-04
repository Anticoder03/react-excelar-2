import React from 'react'

const Button2 = (props) => {
    // Proptype
    // Button2.propTypes = {
    //     text: React.PropTypes.string,
    //     icon: React.PropTypes.element
    // };
  return (
    <>
      <button>
        {props.icon}
        {props.text}
      </button>
    </>
  )
}

export default Button2
