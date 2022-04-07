import React from 'react'

// Styles
import styled from 'styled-components';

// Components
import Card from '../Card';

function List() {
  const styleCard = { margin: "20px 0" }
  return (
    <ListContainer>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((el, index) => (
          <GameCard styles={styleCard} key={index} />
        ))
      }
    </ListContainer>
  )
}

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const GameCard = styled(Card)`
    display: flex;
    flex-wrap: wrap;
`;

export default List
