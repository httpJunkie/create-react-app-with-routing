import React from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

// stateless function components

const Home = () => <h1>Home</h1>

const Links = () => (
  <nav>
    <Link to="/">Home</Link><br/>
    <Link to="/about">About</Link><br/>
    {/* replacing the link says: when someone clicks me, my route will replace the current route on the history stack */}
    <Link replace to="/contact">Contact</Link>
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