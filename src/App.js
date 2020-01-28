import React from 'react'
import About from './About'
import AboutStudent from './AboutStudent'
import Home from './Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => (
  <Router>
    
  <div>
    
    <Link to="/">Home</Link>
    {' '}
    <Link to="/about">About</Link>
    {' '}
    <Link to="/about/Juan">About Juan</Link>
    <Link to="/about/Ryan">About Ryan</Link>
    </div>

    <Switch>

      <Route path="/" exact>
        
        <Home />
        
      </Route>

      <Route path="/about" exact>
      
        <About />
        
      </Route>

      <Route path="/about/:studentName" exact>
          
          <AboutStudent />
      
      </Route>

      <Route path ="/home" exact>

      <Redirect to='/'/>
        
      </Route>

      <Route path ="/home" exact>

        <Redirect to='/' />
        
      </Route>
      
      <Route path='/'>

          <h1>Page Not Found</h1>

      </Route>

    </Switch>

  </Router>
)

export default App