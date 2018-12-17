import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Steve', age: 35},
      {name: 'Bob', age: 40},
      {name: 'Frank', age: 50}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //DONT DO THIS: this.state.persons[0].name = 'Steven';
    this.setState(
      {
        persons: [
          {name: newName, age: 35},
          {name: 'Bob', age: 40},
          {name: 'Frank', age: 50}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Steve', age: 35},
          {name: event.target.value, age: 40},
          {name: 'Frank', age: 50}
        ]
      }
    )
  }

  togglePersonsHandler = () => {
    //const doesShow = this.state.showPersons;
    //this.setState({showPersons: !doesShow});
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };

    let persons;
    
    if (this.state.showPersons) {
      persons = (
        <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                click={this.switchNameHandler.bind(this, 'Steve!')}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler}/>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}>
                Children prop</Person>
            </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={ () => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
            
      </div>

      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Yo!'));
    );
  }
}

export default App;
