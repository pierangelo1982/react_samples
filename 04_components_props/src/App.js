import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person'

class App extends Component {
  render() {

    state=  {
      person: [
        {name: 'Pierangelo', age: '38'},
        {name: 'Marco', age: '35'},
        {name: 'Donatella', age: '64'},
      ]
    }

    return (
    
      <div className="App">
          <h1>Hi! I'm a React App!</h1>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} />
          <Person name={this.state.person[1].name} age={this.state.person[1].age} />
          <Person name={this.state.person[2].name} age={this.state.person[2].age}>Ciao Mamma</Person>
      </div>

    );
    
  }
}



export default App;
