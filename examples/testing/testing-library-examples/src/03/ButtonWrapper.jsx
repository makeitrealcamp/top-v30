import React from 'react'

const ButtonWrapper = ({ title, handleClick }) => {
  return (
    <button onClick={handleClick} data-testid="button-wrapper">
      {title}
    </button>
  )
}

export default ButtonWrapper
