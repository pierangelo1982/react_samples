import React, { useState } from 'react';
import './App.css';

import Person from './Components/Person'

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Pierangelo', age: "38"},
      {name: 'Marco', age: '35'},
      {name: 'Donatella', age: "64"}
    ]
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        {name: 'Pier', age: "38"},
        {name: 'Marco', age: '35'},
        {name: 'Doni', age: "64"}
      ]
    });
  }

  return (
    
    <div className="App">
        <button onClick={switchNameHandler}>CAMBIA</button>
        <h1>Hi! I'm a React App!</h1>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      </div>

  );
    

}



export default App;
