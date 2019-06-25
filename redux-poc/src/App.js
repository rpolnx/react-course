import React from 'react';
import InputWay from './components/InputWay';
import ViewWay from './components/ViewWay';
import Counter from './components/Counter/Counter';
import './App.css';

const App = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center"}}>
      <div style={{padding: '10px', border: "solid 2px black", maxWidth: "600px", margin: "50px auto"}}>
        <ViewWay />
        <InputWay />
      </div>
      <div style={{padding: '10px', border: "solid 2px black", maxWidth: "600px", margin: "20px auto"}}>
        <Counter />
      </div>
    </div>

  );
}
export default App;