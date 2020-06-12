//IMPORTS
//-Modules
import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
//-Images
import ArrowDownButton from '../../../imgs/bitArrowDown.svg'


//STYLES
//-Variables

const h270px = "40.4797601vh"
//-Components
const Container = styled.div`
    position: relative;
    display: inline-block;
`
const NameBox = styled.div`
    width: auto;
    padding: 0 30px;
    height: 60px;
    position: absolute;
    top: 0px;
    left: 30px;
    background: black;
`
const Name = styled.h2`
  font-family: 'Gotham-Black';
  font-size: 14px;
  color: white;
  line-height: 60px;
  text-transform: uppercase;
`
const Image = styled.img`
    width: 34.0329835vh;
    height: ${h270px};
    display: block;
    margin-left: 30px;
    margin-right: 15px;
`
const ArrowBox = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    background: black;
    bottom: -30px;
    right: -15px;
`
const Arrow = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
`


//MAIN COMPONENT
function RecentComp({photo, urlLink, name}) {
  return (
    <Container>
            <Image src={photo}/>

            <NameBox>
              <Name>{name}</Name>
            </NameBox>

            <Link to={urlLink}>
              <ArrowBox>
                  <Arrow  src={ArrowDownButton}/>
              </ArrowBox>
            </Link>    
    </Container> 
  )
}
export default RecentComp