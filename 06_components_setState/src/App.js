import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Pierangelo', age: '38'},
      {name: 'Marco', age: 35},
      {name: 'Donatella', age: 64}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Pier', age: '38'},
        {name: 'Marco', age: 35},
        {name: 'Doni', age: 64}
      ]
    })
  }

  render() {

    return (
    
    <div className="App">
        <h1>Hi! I'm a React App!</h1>
        
        <button onClick={this.switchNameHandler}>CAMBIA</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Ciao Mamma</Person>
      </div>

    );
    
  }
}



export default App;
