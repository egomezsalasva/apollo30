//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-block;
`

const Image = styled.img`
    width: 227px;
    height: 270px;
    display: inline-block;
    margin-left: 30px; 
`


//MAIN COMPONENT
function RecentComp({photo}) {
  return (
    <Container>
            {/* <NameBox>
            <Name></Name>
            </NameBox> */}

            <Image src={photo}/>

            {/* <ArrowBox>
                <Arrow></Arrow>
            </ArrowBox> */}
        
    </Container>
    
  )
}
export default RecentComp