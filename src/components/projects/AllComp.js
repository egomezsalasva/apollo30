//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import RecentComp from './recentComposition/RecentComp'

const Container = styled.div`
`

//MAIN COMPONENT
function AllComp() {
  return (
    <Container>
        <RecentComp/>
    </Container>
    
  )
}
export default AllComp