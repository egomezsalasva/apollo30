//IMPORTS
//-Modules
import React from 'react'
//-Components
import ContactButton from '../components/globals/ContactButton'
import HeroComp from '../components/home/HeroComp'
import HomeNav from '../components/home/HomeNav'


//MAIN COMPONENT
function Home() {
  return (
    <>
      <ContactButton/>
      <HeroComp/>
      <HomeNav/>
    </>
  )
}
export default Home