import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Steve', age: 35},
      {name: 'Bob', age: 40},
      {name: 'Frank', age: 50}
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    //DONT DO THIS: this.state.persons[0].name = 'Steven';
    this.setState(
      {
        persons: [
          {name: 'Steven', age: 35},
          {name: 'Bob', age: 40},
          {name: 'Frank', age: 50}
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Children prop</Person>
      </div>

      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Yo!'));
    );
  }
}

export default App;
