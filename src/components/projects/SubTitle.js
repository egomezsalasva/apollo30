//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'

const Title = styled.h4`
    font-family: 'Gotham-Black';
    font-size: 14px;
    color: ${props => props.theme.white};
    letter-spacing: 0;
    margin-left: 30px;
    margin-bottom: 45px;
`

//MAIN COMPONENT
function SubTitle(props) {
  return (
  <Title>{props.children}</Title>  
  )
}
export default SubTitle