import React, { useEffect, useState, useRef } from 'react'
import debounce from 'lodash.debounce'

// Styles
import styled from 'styled-components';

// Images
import battlefieldMini from '../../../../assets/images/Battlefield2042Mini.png'
import ghostrunnerMini from '../../../../assets/images/GhostRunnerMini.png'
import cyberpunkMini from '../../../../assets/images/Cyberpunk2077Mini.png'
import farcryMini from '../../../../assets/images/FarCryNewDawnMini.png'

// Icons
import { ArrowLeft, ArrowRight } from '../../../../assets/icons'
import Loader from '../../utils/Loader'

const gamesList = [battlefieldMini, farcryMini, ghostrunnerMini, cyberpunkMini, battlefieldMini, farcryMini, ghostrunnerMini]

let responsive = [
  { breakPoint: { width: 0, widthImages: 250, item: 1 } },
  { breakPoint: { widthWindow: 280, widthImages: 275, item: 1 } },
  { breakPoint: { widthWindow: 640, widthImages: 550, item: 2 } },
  { breakPoint: { widthWindow: 1100, widthImages: 820, item: 3 } },
  { breakPoint: { widthWindow: 1500, widthImages: 1100, item: 4 } }
]

function Slider() {
  let container = useRef();
  const [loading, setLoading] = useState(true)
  const [activeValue, setActiveValue] = useState(0)
  const [lastClick, setLastClick] = useState(0)
  let widthContainer;
  let itemsInArray;

  useEffect(() => {
    handleResize()
    const debounced = debounce(handleResize, 100);
    window.addEventListener("resize", debounced);
    setTimeout(() => { setLoading(false) }, 2000)

    return () => {
      debounce.cancel()
      window.removeEventListener("resize", debounced);
    }
  }, [])

  const handleClickNext = () => {
    if (lastClick === activeValue) return;
    setActiveValue(prev => prev + 1)
  }

  const handleResize = () => {
    if (container.current.children.length === 0) return;
    let item;
    for (let i = 0; i < responsive.length; i++) {
      if (window.innerWidth > responsive[i].breakPoint.widthWindow) {
        widthContainer = responsive[i].breakPoint.widthImages
        item = responsive[i].breakPoint.item
      }
    }

    evalResizing(widthContainer, item);
  }

  const evalResizing = (widthContainer, item) => {
    // It will only change the items in the slider if the breakpoint changes 
    // (therefore also changes the quantity of items to show)
    if (itemsInArray === item) return;
    // Check how many click the user can make
    setLastClick(Math.floor((gamesList.length - 1) / item))
    itemsInArray = item;
    container.current.style.width = widthContainer + "px";
    // Reset the view of the slider to the first section
    container.current.style.transform = `translate3d(0, 0, 0)`
  }


  return (
    <>
      <BackButton disabled={activeValue === 0 && true} onClick={() => setActiveValue(prev => prev !== 0 && prev - 1)}>
        <ArrowLeft />
      </BackButton>
      <GamesList>
        <Container ref={container} style={{ transform: `translate3d(${-activeValue * 100}%, 0, 0)` }}>
          {
            loading ? (
              <GameImage>
                <Skeleton >
                  <Loader />
                </Skeleton>
              </GameImage>
            ) : (
              gamesList.map((el, index) => (
                <GameImage key={index}>
                  <Image src={el} alt="novo" />
                </GameImage>
              ))
            )
          }
        </Container>
      </GamesList>
      <NextButton disabled={activeValue === 3 && true} onClick={() => handleClickNext()}>
        <ArrowRight />
      </NextButton>
    </>
  )
}

const Image = styled.img`
  height: 100%;
  width: 225px;
  filter: drop-shadow(8px 8px 6px rgba(0, 0, 0, 0.3));
`

const Skeleton = styled.div`
  height: 280px;
  width: 225px;
`

const GameImage = styled.div`
   margin-left: 25px; 
   margin-right: 25px;
   padding-bottom: 20px;
`

const GamesList = styled.div`
  overflow: hidden;
  display: flex
`

const Container = styled.div`
display: flex; 
transition: all 0.5s ease;

div:first-of-type {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg path,
  svg rect{
    fill: rgba(0, 255, 209, 0.84);
  }
}
`

const NextButton = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 3px solid white;
  padding: 13px;
  margin-left: 10px;
  cursor: pointer;

  &:not([disabled]):active {
    background: #1FEAB9;

    svg {
      background: #1FEAB9;
      color: #1FEAB9;
      fill: #1FEAB9;
    }
  }
  `

const BackButton = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 2.5px solid white;
  padding: 13px;
  margin-right: 10px;
  cursor: pointer;

  &:active {
    background: #1FEAB9;

    svg {
      background: #1FEAB9;
      color: #1FEAB9;
      fill: #1FEAB9;
    }
  }
`

export default Slider
