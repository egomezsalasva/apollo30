//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import ContactButton from '../components/globals/ContactButton'
import HeroComp from '../components/home/HeroComp'
import HomeNav from '../components/home/HomeNav'


//STYLES
//-Variables

//-Components
const Container = styled.div`

`


//MAIN COMPONENT
function Home() {
  return (
    <Container>
      <ContactButton/>
      <HeroComp/>
      <HomeNav/>
    </Container>
  )
}
export default Home