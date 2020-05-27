//IMPORTS
//-Modules
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


//STYLES
//-Variables
const lightColour = "white"
const h30px = "4.49775112444vh"
//-Components
const Container = styled.div`
    position: relative;
    margin: ${h30px} auto 0;
`
const NavOptionArea = styled.div`
    width: 150px;
    height: 60px;
    margin: 0 auto;
`
const NavTitle = styled.p`
    font-family: 'Press Start 2P';
    font-size: 12px;
    color: ${lightColour};
    letter-spacing: 0;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(15px);
`


//MAIN COMPONENT
function HomeNav({serviceTitleClass, launchesTitleClass}) {
  return (
    <Container>
      <Link to="/services">
        <NavOptionArea>
            <NavTitle className={serviceTitleClass} >Services</NavTitle>
        </NavOptionArea>
      </Link>
      <Link to="/projects">
        <NavOptionArea>
            <NavTitle className={launchesTitleClass} >Launches</NavTitle>
        </NavOptionArea>
      </Link>
    </Container>
  )
}
export default HomeNav