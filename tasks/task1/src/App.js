import React, { useState } from 'react';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';
import './App.css';

function App() {
  const [username, setUsername] = useState("Carlim das viola");
  const name = "Kit";

  const inputHandler = (event) => {
    setUsername(event.target.value);
  }

  const style = {
    backgroundColor: '#ccc',
    textSize: '20px',
    color: "red"
  }


  return (
    <div style={style}>
      <UserOutput username="Rodrigo"/>
      <UserOutput username={name} />
      <UserOutput changed={username} />
      <UserInput change={inputHandler.bind(this)} />
    </div>
  );
}

export default App;
