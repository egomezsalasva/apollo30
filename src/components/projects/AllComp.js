//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import RecentComp from './recentComposition/RecentComp'
import ClientsComp from './clientsComp/ClientsComp'

const Container = styled.div`
`

//MAIN COMPONENT
function AllComp() {
  return (
    <Container>
        <RecentComp/>
        <ClientsComp/>
    </Container>
    
  )
}
export default AllComp