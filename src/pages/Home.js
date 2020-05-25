//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import ContactButton from '../components/globals/ContactButton'
import HeroComp from '../components/home/HeroComp'


//STYLES
//-Variables

//-Components
const Container = styled.div`
    overflow: hidden;
`


//MAIN COMPONENT
function Home() {
  return (
    <Container>
      <ContactButton/>
      <HeroComp/>
    </Container>
  )
}
export default Home