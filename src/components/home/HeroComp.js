//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Images
import letteringApollo from '../../imgs/letteringApollo.svg'
import logoApollo from '../../imgs/logoApollo-3D@2x.png'


//STYLES
//-Variables
const h45px = "6.74662669vh"
const h55px = "8.24587706vh"
const h108px = "16.191904vh"
const h125px = "18.7406296852vh"
const w255px = "68vw"

//-Components
const Container = styled.div`
    margin-top: ${h125px};
    text-align: center;
`
const Lettering = styled.img`
    display: block;
    height: ${h55px};
    margin: 0 auto;
`
const Logo = styled.img`
    display: block;
    height: ${h108px};
    margin: ${h45px} auto 0;
`
const Slogan = styled.p`
    font-family: 'Gotham-Book';
    font-size: 0.75em;
    line-height: 1.3;
    color: ${props => props.theme.text};
    text-align: center;
    width: ${w255px};
    max-width: 300px;
    margin: ${h45px} auto 0;

`


//MAIN COMPONENT
function HeroComp({letteringLogoClass, planetLogoClass, sloganClass}) {

  
  return (
    <Container>
      <Lettering src={letteringApollo} alt="Apollo30 Lettering" className={letteringLogoClass} />
      <Logo src={logoApollo} alt="Apollo30 Logo" className={planetLogoClass} />
      <Slogan className={sloganClass} >We are a creativity, branding and development agency and we are celebrating our first revolution movement around the sun</Slogan>
    </Container>
  )
}
export default HeroComp