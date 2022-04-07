import React from 'react'

// Styles
import styled from 'styled-components';

// Images
import callOfDutyCard from '../../../../assets/images/CallOfDutyCard.png'

// Components
import Button from '../Button';

function Card({ styles }) {

  const buttonStyle = {
    backgroundColor: '#1FEAB9',
    color: '#2B2B2B',
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
    fontWeight: '600',
    fontSize: '12px',
    padding: '10px 20px',
    border: 'none'
  }

  return (
    <CardStyle style={styles}>
      <CardImage>
        <Image src={callOfDutyCard} alt="" />
      </CardImage>
      <Details>
        <CardTitle>Call Of Duty Vanguard</CardTitle>
        <div><span>$23.50 UDS</span> → <span>$13.50 UDS</span></div>
        <div>
          <Button text='Buy Now' styles={buttonStyle} hasIcon={true} />
        </div>
      </Details>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  display: flex;
  height: 230px;
  width: 470px;
  border: 3px solid rgba(241, 241, 241, 0.84);
  box-sizing: border-box;
  /* box-shadow: 2px 2px 8px 1px #2FFFCD; */
  border-radius: 4px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};

  @media(max-width: 1080px) {
    width: 430px;
  }
`

const CardTitle = styled.h2`
  max-width: 130px;
  font-family: 'M PLUS Rounded 1c';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 34px;
  text-transform: uppercase;
`

const CardImage = styled.div`
  /* width: 100%; */
`

const Image = styled.img`
  border-radius: 3px;
  object-fit: contain;
  height: 100%;
`

const Details = styled.div`}
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  padding: 10px 0 20px 0;

  div {
    span:first-of-type {
      text-decoration: line-through;
    }
  }
`

export default Card
