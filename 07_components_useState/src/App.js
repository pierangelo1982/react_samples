import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person'

class App extends Component {
  render() {

    return (
    
    <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <Person name="Perangelo" age="38" />
        <Person name="Marco" age="35" />
        <Person name="Donatella" age="54">Ciao Mamma</Person>
      </div>

    );
    
  }
}



export default App;
