//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import SubTitle from '../SubTitle'

const Container = styled.div`
`

const ClientName = styled.p`
    display: inline;
    font-family: 'Gotham-Book';
    font-size: 12px;
    color: white;
    letter-spacing: 0;
    text-align: center;
    line-height: 16.8px;
`

const ListContainer = styled.p`
    padding: 0 30px;
    text-align: center;
`

const clientList = [
    "Nike", 
    "Vogue",
    "Premis de Teatre de Catalunya",
    "Sita Abellán",
    "Finally Press",
    "Can Pizza",
    "Sr. Lolo",
    "Grupo Carpe Diem",
    "Three Marks Coffee",
    "Circa Cultural Projects",
    "OWL Psicología",
    "The New Storytellers",
    "Chip Baker Films",
    "Trescom",
    "Bst Events",
    "Arval Car Sharing",
    "Mucho Muchacho",
    "La Proa 04",
    "Montana Gallery Barcelona"
]

const clientListExceptLast =  clientList.slice(0, clientList.length-1)

const lastClientName =  clientList.slice(-1)


//MAIN COMPONENT
function ClientsComp() {
  return (
    <Container>
        <SubTitle marginBottom="15px">Clients</SubTitle>
        <ListContainer>
            {
                clientListExceptLast.map( clientName => {
                    return <ClientName>{`${clientName}\u00A0\u00A0·\u00A0\u00A0`}</ClientName>
                })
            }
            <ClientName>{lastClientName}</ClientName>
        </ListContainer>
        
        
    </Container>
    
  )
}
export default ClientsComp