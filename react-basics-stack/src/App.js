import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // Special element on react -- if it's changes, react will re-render
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
    this.setState({persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manuela', age: 29},
        {name: 'Stephanie', age: 26}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
