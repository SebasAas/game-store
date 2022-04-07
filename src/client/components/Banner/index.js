import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

// Images
import bannerAssasins from '../../../../assets/images/AssassinsCreedSyndicate.png'

// Components
import Button from '../Button'
import PriceDiscount from '../PriceDiscount'

const banners = [bannerAssasins, bannerAssasins, bannerAssasins, bannerAssasins]
const delay = 7000;

function Banner() {
  const timeoutRef = useRef(null);
  const [activeId, setActiveId] = useState(0);
  const [pauseBanner, setPauseBanner] = useState(false);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        setActiveId((prevIndex) => {
          if (!pauseBanner) {
            return prevIndex === banners.length - 1 ? 0 : prevIndex + 1
          } else {
            return prevIndex
          }
        })
      }, delay
    );

    return () => {
      resetTimeout();
    };
  }, [activeId, pauseBanner]);

  return (
    <Slider
      onMouseEnter={() => setPauseBanner(true)}
      onMouseLeave={() => setPauseBanner(false)}>
      <SliderImages style={{ transform: `translate3d(${-activeId * 100}%, 0, 0)` }}>
        {banners.map((el, index) => (
          <Slide key={index}>
            <ImgBanner src={el} alt="Assasins Banner" />
          </Slide>
        ))}
      </SliderImages>
      <Details>
        <Title>
          Assassin’s creed syndicate
        </Title>
        <Subtitle>
          Get into the history of Jacob and Evie Frye and be part of the Second Industrial Revolution
        </Subtitle>
        <Discount>
          {/* <PriceDiscount /> */}
          <Container>
            <Button text='watch more' />
          </Container>
        </Discount>
      </Details>
      <Figure>
        <ImagesFigure>
          {/* Text or Image */}
        </ImagesFigure>
      </Figure>

      <Dots>
        {banners.map((_, idx) => (
          <Dot
            key={idx}
            className={`${activeId === idx ? " active" : ""}`}
            onClick={() => {
              setActiveId(idx);
            }}
          ></Dot>
        ))}
      </Dots>
    </Slider>
  );
}

const ImgBanner = styled.img`
    height: 100%;
    width: 100vw;
    object-fit: cover;
`

const Slider = styled.div`
    position: relative;
    flex-direction: row;
    height: 70vh;
 `

const SliderImages = styled.div`
  white-space: nowrap;
  transition: all 1000ms ease;
`

const Slide = styled.div`
  display: inline-block;
`

const Dots = styled.div`
  bottom: 30px;
  width: 285px;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  flex-direction: row;
`

const Dot = styled.div`
  border-radius: 50%;
  background: white;
  height: 13px;
  width: 13px;
  cursor: pointer;
  
  &.active{
    background: rgba(0, 255, 209, 0.84)
  }
`

const Figure = styled.div`
  clip-path: polygon(45% 0, 100% 0%, 100% 100%, 0% 100%);
  height: 100%;
  width: 50vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background: rgba(47, 255, 205, 0.85);

  @media (max-width: 980px) {
    display: none;
  }
`

const ImagesFigure = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Details = styled.div`
  width: 580px;
  margin: 20px 0px 0px 80px;
  position: absolute;
  top: 4em;

  @media (max-width: 980px) {
    width: auto;
    margin: 20px 20px 0;
  }
`

const Title = styled.p`
  font-size: 3.375rem;
  line-height: 140%;
  font-family: 'Spartan', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: whitesmoke;

  @media (max-width: 980px) {
    text-align: center;
  }
`

const Subtitle = styled.p`
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.375rem;
  line-height: 140%;
  color: whitesmoke;

  @media (max-width: 980px) {
    text-align: center;
  }
`

const Discount = styled.div`
  margin-top: 70px;

  @media (max-width: 620px) {
    margin-top: 40px;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 35px
`

export default Banner
