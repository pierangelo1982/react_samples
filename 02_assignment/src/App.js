import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'
import './App.css';

class App extends Component {

  state = {
    textInput: ''
  }

  lengthTextHandler = (event) => {
    this.setState({textInput: event.target.value})
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.textInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({textInput: updatedText});
  }

  render() {

    const charList = this.state.textInput.split('').map((ch, index) => {
      return <CharComponent 
          character={ch} 
          key={index}
          clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        
        <input type="text"
          value={ this.state.textLength }
          onChange={this.lengthTextHandler} />

        <p>The Text lenght: {this.state.textInput.length}</p>

        <ValidationComponent
          textLength={this.state.textInput.length}
          ></ValidationComponent>

        {charList}



        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
