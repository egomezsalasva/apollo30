//IMPORTS
//-Modules
import React from 'react'
import { Switch, Route } from "react-router-dom"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import {CSSTransition} from 'react-transition-group'
//-Components
import ContactButton from './components/globals/ContactButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import InnerProject from './pages/InnerProject'
import Contact from './pages/Contact'
//import CustomCursor from './components/globals/CustomCursor'


//STYLES
const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* cursor: none; */
  }
  a{
    text-decoration: none;
  }
  body {
    margin: 0;
    font-family: 'Gotham-Book', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*Custom Code*/
    /* background-color: ${props => props.theme.background}; */
    background: black;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`


//ROUTE MANAGEMENT
const routes = [
  { path: "/", name: "Home", Component: Home},
  { path: "/services", name: "Services", Component: Services},
  { path: "/projects", name: "Projects", Component: Projects},
  { path: "/projects/:idName/:idNumber", name: "Projects", Component: InnerProject},
  { path: "/contact", name: "Contact", Component: Contact},
]


//MAIN COMPONENT
function App() {
  //Dark & Light Vesrions
  const darkTheme = {
    background: "black",
    text: "white",
  }
  // const lightTheme = {
  //   background: "white",
  //   text: "black",
  // }
  const pageTransitionEffects = pathArg => {
    if(pathArg === "/"){
      return ""
    } else if (pathArg === "/contact"){
      return "contactTransition"
    } else {
      return "mainTransition"
    }
  }
  return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>{/* Stylesheet Styled Components*/}
        {/* <CustomCursor /> */}
        <ContactButton/>
        <div className="container">
          {routes.map(({ path, Component, name })=>{
            return <Route key={name} path={path} exact>
                      {({match}) => (
                        <CSSTransition in={match != null} timeout={1200} classNames={pageTransitionEffects(path)} unmountOnExit >
                          <div className="mainTransition contactTransition">
                            <Component/>
                          </div>
                        </CSSTransition>
                      )}
                    </Route> 
          })}
        </div>
      </ThemeProvider>
  )
}
export default App
