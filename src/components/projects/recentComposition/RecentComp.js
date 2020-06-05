//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import SubTitle from '../SubTitle'
import ProjectsSlide from './ProjectsSlide'

const Container = styled.div`
    margin-top: 120px;
`

//MAIN COMPONENT
function RecentComp() {
  return (
    <Container>
        <SubTitle>Recent Work</SubTitle>
        <ProjectsSlide />
    </Container>
    
  )
}
export default RecentComp