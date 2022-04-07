import React from 'react'

// Components
import List from '../components/GameList';

// Styles
import styled from 'styled-components';

// Icons
import { CircleIcon, CrossIcon, CubeIcon, TriangleIcon } from '../../../assets/icons'

function Category() {
  return (
    <CategoryContainer>
      <TitleSection>
        <Circle>
          <CircleIcon />
        </Circle>
        <Cross>
          <CrossIcon />
        </Cross>
        <Title>Categories</Title>
        <Cube>
          <CubeIcon />
        </Cube>
        <Triangle>
          <TriangleIcon />
        </Triangle>
      </TitleSection>
      <CategoriesListSection>
        {/* TODO: Categories */}
        {/* <div>RPG</div>
        <div>FPS</div>
        <div>MMO</div> */}
      </CategoriesListSection>
      <GameListSection>
        <Filter>
          <Subtitle>Filter</Subtitle>
          <OrderBy>
            <p>Order By</p>
            <select name="" id="">
              <option value="relevant">Relevant</option>
              <option value="cheaps">Cheaps</option>
              <option value="top">Top</option>
            </select>
            <hr />
          </OrderBy>
          <OrderPrice></OrderPrice>
        </Filter>
        <GameList>
          <List />
        </GameList>
      </GameListSection>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`
    padding: 100px 90px 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media(max-width: 1360px) {
      padding: 100px 30px 0;
    }
`;

const TitleSection = styled.div`
    min-height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    position: absolute;
    font-size: 1.75rem;
    font-family: 'Spartan', sans-serif;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    color: whitesmoke;
    margin-top: 45px;
  @media (max-width: 980px) {
    text-align: center;
  }
`

const Subtitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-family: 'Spartan', sans-serif;
  text-transform: uppercase;
  color: whitesmoke;
`

const Circle = styled.span`
    position: absolute;
    left: 7%;
`;

const Cross = styled.span`
    position: absolute;
    left: 20%;
    top: 50%;
`;

const Cube = styled.span`
    position: absolute;
    right: 20%;
    top: 50%;
`;

const Triangle = styled.span`
    position: absolute;
    right: 7%;
`;

const CategoriesListSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
`;

const GameListSection = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Filter = styled.div`
  width: 15%;
  margin-top: 20px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const GameList = styled.div`
  width: 85%;

  @media (max-width: 1200px) {
    margin: 30px 0;
    width: 100%;
  }
`;

const OrderBy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    p {

    }

    select {
      background: transparent;
      border: none;
      color: white;
      margin-top: 20px;
      text-align: initial;
      width: 168px;
      font-size: 14px;

      option {
        background: black
      }
    }

    hr {
      width: 168px;
      background: rgba(47,255,205,0.84);
      border: 1px solid rgba(47,255,205,0.84);
    }
`;

const OrderPrice = styled.div`

`;

export default {
  component: Category
};