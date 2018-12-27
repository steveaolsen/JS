import React, { Component } from 'react';
import './App.css';



class App extends Component {

  state = {
    userInput: "input text to display below"
  }

  
  textChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }


  render() {
    return (
      <div className="Root">
        <input 
          type="text" 
          onChange={this.textChangeHandler} 
          value={this.state.userInput}
         />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
