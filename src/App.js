//IMPORTS
//-Modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//-Components
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


//MAIN COMPONENT
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
