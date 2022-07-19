import React from 'react'
import styled from 'styled-components'

function Button(props) {
  return (
    <ButtonDiv>{props.text}</ButtonDiv>
  )
}

export default Button

const ButtonDiv = styled.button`

  color: var(--white);
  padding: 7px 25px;
  background-color: var(--main);
  outline: none;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: transparent;
    color: var(--main);
    border: 2px solid var(--main)
  }

`