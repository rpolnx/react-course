import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/pages/ProductDetail";
import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
