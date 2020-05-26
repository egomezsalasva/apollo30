//IMPORTS
//-Modules
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


//STYLES
//-Variables

//-Components
const Container = styled.div`
    position: relative;
    margin: 60px auto 0;
`
const NavOptionArea = styled.div`
    width: 150px;
    height: 60px;
    margin: 0 auto;
`
const NavTitle = styled.p`
    font-family: 'Press Start 2P';
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
`


//MAIN COMPONENT
function HomeNav() {
  return (
    <Container>
      <Link to="/services">
        <NavOptionArea>
            <NavTitle>Services</NavTitle>
        </NavOptionArea>
      </Link>
      <Link to="/projects">
        <NavOptionArea>
            <NavTitle>Projects</NavTitle>
        </NavOptionArea>
      </Link>
    </Container>
  )
}
export default HomeNav