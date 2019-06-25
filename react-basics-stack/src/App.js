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
    otherState: 'some other value',
    showPersons: false
  });

  //An elegant way is to define a variable const if you don't want to change it and don't want to be mutated

  const deleteNameHandler = (personIndex) => {
    const persons = personsState.persons;
    setPersonsState({
      persons: persons.splice(personIndex, 1),
      otherState: personsState.otherState,
      showPersons: personsState.showPersons
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

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({ persons: personsState.persons, otherState: personsState.otherState, showPersons: !personsState.showPersons })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let personsShow = null;

  personsShow = personsState.showPersons ?
    <div>
      {personsState.persons.map((person, index) => <Person name={person.name} age={person.age} click={deleteNameHandler(index)} />)}
    </div> : null

  return (
    <div className="App">
      <h1>Hi!</h1>
      <button onClick={togglePersonsHandler.bind(this)} style={style}>Show Persons</button>
      {personsShow}
    </div>
  );
}

export default App;
