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

    <br/><br/>

    {/* Parse query parameters inline and as object */}
    <NavLink to="/query?id=123">inline</NavLink>
    <NavLink to={{pathname:'/query', search:'id=456'}}>object</NavLink>

  </nav>
)

const App = () => (
  <Router>
    <div id="routes">

      {/* Render our Links component (navigation) */}
      <Links />

      {/* Render component with component prop */}
      <Route exact path="/" component={Home} />

      <Route exact path="/other/:page?-:subpage" render={({match}) => (
        <h1>
          Page: {match.params.page || 'Home'}<br/>
          Subpage: {match.params.subpage}
          </h1>
      )} />

      {/* Use Regexes with route params like: http://localhost:3000/regex/12-18-2018/.html*/}
      <Route exact path="/regex/:a(\d{2}-\d{2}-\d{4})/:b(\.[a-z]+)" render={({match}) => (
        <h1>
          ParamA: {match.params.a}<br/>
          ParamB: {match.params.b}
          </h1>
      )} />

      {/* Render component without component prop */}
      <Route path="/about" render={() => <h1>About</h1>} />
      
      {/* Render component using children with match argument */}
      <Route path="/contact" children={({match}) => match && <h1>Contact</h1>} />

      {/* Parse Query parameters */}
      <Route path="/query" render={({match, location}) =>(
        <div>
          <p>root</p>
          <p>{JSON.stringify(match)}</p>
          <p>{JSON.stringify(location)}</p>
          <p>{new URLSearchParams(location.search).get('id')}</p>
        </div>
      )} />

    </div>
  </Router>
)

export default App;