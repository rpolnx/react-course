import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Navigation from './components/Navigation/Navigation';
import Relative from './components/Relative';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navigation />      
        <Switch> {/* Without Switch we can't use error */}
          <Route path="/" component={Home} exact /> {/* This tells to find the exact */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/relative" component={Relative} />
          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
