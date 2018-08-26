import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// stateless function components

const Home = (props) => {
  console.log(props)
  return <h1>Home</h1>
}

const App = () => (
  <Router>
    <div id="routes">

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