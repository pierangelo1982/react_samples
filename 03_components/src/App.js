import React, { Component } from 'react';
import './App.css';

import Testo from './Components/Testo'

class App extends Component {
  render() {

    return (
    
    <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <Testo />
      </div>

    );
    
  }
}



export default App;
