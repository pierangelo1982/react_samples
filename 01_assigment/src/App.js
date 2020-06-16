import React, { Component } from 'react';

import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'
import './App.css';

class App extends Component {

  state = {
    userName: 'Pierangelo'
  };

  dataHandler = (event) => {
    this.setState({
        userName: event.target.value
    })
  }
  
  render() {
    
    return (
      <div className="App">
          
        <UserInput
          startUserName={this.state.userName}
          click={this.dataHandler}></UserInput>

        <UserOutput
          userName={this.state.userName}></UserOutput>
        
        <UserOutput
          userName={this.state.userName}></UserOutput>

      </div>
    );

  }
}

export default App;
