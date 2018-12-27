import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Steve', age: 35},
      {id: 2, name: 'Bob', age: 40},
      {id: 3, name: 'Frank', age: 50}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //preferred method below, "spread" ...
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( {persons: persons});
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
          {this.state.persons.map((person, id) => {
             return <Person 
                click={() => this.deletePersonHandler(id)}
                name={person.name}
                age={person.age}
                key={person.id}  //use a unique ID, maybe the one from the database you are pulling from
                changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
              
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
