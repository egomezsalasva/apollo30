//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import letteringApollo from '../../imgs/letteringApollo.svg'
import logoApollo from '../../imgs/logoApollo-3D@2x.png'


//STYLES
//-Variables

//-Components
const Container = styled.div`
    margin-top: 50vh;
    transform: translateY(calc(-50% - 30px));
    /* background: red; */
    text-align: center;
`
const Lettering = styled.img`
    display: block;
    width: 195px;
    margin: 0 auto;
`
const Logo = styled.img`
    display: block;
    width: 150px;
    margin: 45px auto 0;
`
const Slogan = styled.p`
    font-family: 'Gotham-Book';
    font-size: 12px;
    line-height: 1.3;
    color: #FFFFFF;
    text-align: center;
    width: 225px;
    margin: 45px auto 0;

`


//MAIN COMPONENT
function HeroComp() {
  return (
    <Container>
      <Lettering src={letteringApollo} alt="Apollo30 Lettering"/>
      <Logo src={logoApollo} alt="Apollo30 Logo"/>
      <Slogan>We are a creativity, branding and development agency and we are celebrating our first revolution movement around the sun</Slogan>
    </Container>
  )
}
export default HeroComp