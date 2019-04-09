import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  // Special element on react -- if it's changes, react will re-render => state old way
  // With functions, pure js can be more used on React
  // Destructing: first element is the data, second is the function to set state, now can be customized
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  });

  //An elegant way is to define a variable const if you don't want to change it and don't want to be mutated

  const switchNameHandler = (newName) => {
    console.log('Was clicked!');
    // This do not merge params with the passed one!!!
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manuela', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: personsState.otherState
    });
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 }, /* The input of got name */
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi!</h1>
      <button onClick={switchNameHandler.bind(this, "Maxs")}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, "Julia")}
        changed={nameChangeHandler}>
        My hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
