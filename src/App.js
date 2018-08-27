import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

const isActiveFunc = (match, location) => {
  // console.log(match, location);
  return match;
}

// stateless function components
const Home = () => <h1>Home</h1>

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink><br/>
    {/* replacing the NavLink says: when someone clicks me, my route will replace the current route on the history stack */}
    <NavLink replace activeStyle={{color: 'green'}} to="/about">About</NavLink><br/>
    {/* 
      we can determine if the activeClassName class is applied with the use of a function as below 
      *note `isActive()` function takes the args: match and location
    */}
    <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact">Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div id="routes">
      <Links />
      {/* Render component with component prop */}
      <Route exact path="/" component={Home} />

      {/* Render component without component prop */}
      <Route path="/about" render={() => <h1>About</h1>} />
      
      {/* Render component using children with match argument */}
      <Route path="/contact" children={({match}) => match && <h1>Contact</h1>} />

    </div>
  </Router>
)

export default App;