import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Top from './components/Top';
import { createStore } from 'redux';

const store = createStore((state = {valor: ""}, action) => {
  const novoState = {...state};

  switch(action.type) {
    case "VALUE_CHANGE":
      novoState.valor = action.valor;
      break;
    
    default:
      ;
  }
  return novoState;
});

function App() {
  return (
    <Provider store={store}>
      <Top />
    </Provider>

  );
}

export default App;
