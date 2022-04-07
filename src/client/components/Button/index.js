import React from 'react'
import styled from 'styled-components';

// Icons
import { CartIcon } from '../../../../assets/icons'

const defaultStyle = {
  padding: '13px 25px'
}

function Button({ text, styles = defaultStyle, className, hasIcon = false }) {
  return (
    <Btn className={className} style={styles}>
      <Container>
        {hasIcon ?
          <span>
            <CartIcon />
          </span>
          : false
        }
        {text}
      </Container>
    </Btn>
  )
}

const Btn = styled.button`
  font-family: 'Spartan', sans-serif;
  border: 2px solid rgba(255, 255, 255, 0.84);
  box-sizing: border-box;
  border-radius: 3px;
  background: transparent;
  color: white;
  padding: ${props => props.padding};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease;
    background-color: rgba(0, 255, 209, 0.84);
    border-color: rgba(0, 255, 209, 0.84);
  }
`

const Container = styled.div`
  min-width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center
`

export default Button
