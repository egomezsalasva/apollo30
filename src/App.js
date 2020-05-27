//IMPORTS
//-Modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
//-Components
import ContactButton from './components/globals/ContactButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import InnerProject from './pages/InnerProject'
import Contact from './pages/Contact'

const GlobalStyle = createGlobalStyle`

  ${normalize}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background-color: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`




//MAIN COMPONENT
function App() {

  const darkTheme = {
    background: "black",
    text: "white",
  }
  const lightTheme = {
    background: "white",
    text: "black",
  }

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <div className="App">
          <ContactButton/>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects/:id">
              <InnerProject />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}
export default App
