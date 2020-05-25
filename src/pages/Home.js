import React from 'react'
import styled from 'styled-components'
import ContactButton from '../components/globals/ContactButton'

const Container = styled.div`
    overflow: hidden;
`


function Home() {
  return (
    <Container>
      <ContactButton/>
    </Container>
  )
}

export default Home