import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: 'Steve', age: 35, job: 'Web Dev'},
      {name: 'Rick', age: 52, job: 'Truck Driver'},
      {name: 'Marvin', age: 67, job: 'Janitor'}
    ]
  }

nameChanger = (newName) => {//click on the first name to add the "!"
  this.setState (
    {
      persons: [
        {name: newName, age: 35, job: 'Web Dev'},
        {name: 'Rick', age: 52, job: 'Truck Driver'},
        {name: 'Marvin', age: 67, job: 'Janitor'}
      ]
    }
  )
  }

userChanged = (event) => {//type in the box to customize the first name
  this.setState (
    {
      persons: [
        {name: event.target.value, age: 35, job: 'Web Dev'},
        {name: 'Rick', age: 52, job: 'Truck Driver'},
        {name: 'Marvin', age: 67, job: 'Janitor'}
      ]
    }
  )
}

  render() {
    return (
      <div className="App">
        <p>Here's Some Text</p>
        <p>Here's Some More Text</p>
        <UserInput 
          changed={this.userChanged} 
          name={this.state.persons[0].name}
        />
        <UserOutput 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          job={this.state.persons[0].job} 
          click={this.nameChanger.bind(this, 'Steve!')}  
        />
        <UserOutput 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          job={this.state.persons[1].job} 
        />
        <UserOutput 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          job={this.state.persons[2].job} 
        />
        
      </div>
    );
  }

}
export default App; 