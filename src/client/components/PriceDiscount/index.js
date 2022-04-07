import React from 'react'
import styled from 'styled-components';

function PriceDiscount({ percent, oldPrice, newPrice }) {
  return (
    <PriceOff>
      <Percentual>33% OFF</Percentual>
      <DiscountSection>
        <Price style={{ textDecorationLine: 'line-through' }}>55.0 USD</Price>
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.0607 13.0607C47.6464 12.4749 47.6464 11.5251 47.0607 10.9393L37.5147 1.3934C36.9289 0.807612 35.9792 0.807612 35.3934 1.3934C34.8076 1.97918 34.8076 2.92893 35.3934 3.51472L43.8787 12L35.3934 20.4853C34.8076 21.0711 34.8076 22.0208 35.3934 22.6066C35.9792 23.1924 36.9289 23.1924 37.5147 22.6066L47.0607 13.0607ZM0 13.5H46V10.5H0V13.5Z" fill="#2FFFCD" fillOpacity="0.84" />
        </svg>

        <Price>36.0 USD</Price>
      </DiscountSection>
    </PriceOff>
  )
}

const PriceOff = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`
const Price = styled.p`
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
`

const DiscountSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 260px;
`

const Percentual = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.83rem;
  color: rgba(47, 255, 205, 0.84);
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export default PriceDiscount
