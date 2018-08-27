import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Routes from './components/Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <h1>Composing Higher-Order Components</h1> */}
      <Router>
        <div>
           <Navigation />
          <Routes />
        </div>
      </Router>
    </div>
   
    );
  }
}

export default App;
