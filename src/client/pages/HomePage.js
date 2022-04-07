import React from 'react';

// Styles
import styled from 'styled-components';

// Component
import Banner from '../components/Banner'
import Slider from '../components/Carousel/Slider'
import Button from '../components/Button';
import Card from '../components/Card';


const Home = () => {
  const styleCardHome = { marginTop: "30px", marginBottom: "20px" }

  return (
    <AppContainer className="center-align">
      {/**
      *
      * Banner Section1
      *
      */}
      <Banner />
      {/**
      *
      * Latest Games Section
      *
      */}
      <LatestGameSection>
        <Title>Check out our latest games</Title>
        <ContainerFigureGames>
          <Figure />
          <ContainerGames>
            <Slider />
          </ContainerGames>
          <ButtonContainer>
            <Button text='browse out games' />
          </ButtonContainer>
        </ContainerFigureGames>
      </LatestGameSection>
      {/**
      *
      * Popular Games Section
      *
      */}
      <PopularGamesSection>
        <Title>Popular Games</Title>
        <ContainerPopularGames>
          {
            [1, 2, 3, 4].map((el, index) => (
              <Card key={index} styles={styleCardHome} />
            ))
          }
        </ContainerPopularGames>
        <ButtonPrimary text='load more' />
      </PopularGamesSection>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LatestGameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  margin-top: 70px;
`

const Title = styled.h1`
  font-family: 'Spartan', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`

const Figure = styled.div`
  clip-path: polygon(50% 50%, 100% 20%, 100% 100%, 0 100%, 0 20%);
  height: 600px;
  width: 100%;
  position: relative;
  background: linear-gradient(180deg, rgba(47, 255, 205, 0.84) 0%, rgba(47, 255, 205, 0) 100%);
`

const ContainerFigureGames = styled.div`
  width: 100%;
  position: relative;
`

const ContainerGames = styled.div`
  position: absolute;
  bottom: 40%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ButtonContainer = styled.div`
    margin: 0 auto;
    width: max-content;
    bottom: 80px;
    left: 0;
    right: 0;
    position: absolute;
`

const PopularGamesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  margin: 70px 0;
`

const ContainerPopularGames = styled.div`
  width: auto;
  max-width: 1250px;
  padding: 0px 40px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;

  @media(max-width: 1080px) {
    padding: 0px 20px;
  }
`

const ButtonPrimary = styled(Button)`
  margin-top: 40px;
`

export default {
  component: Home
};
