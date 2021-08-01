import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AllQuotes } from "./pages/AllQuotes";
import { NewQuote } from "./pages/NewQuote";
import { NotFound } from "./pages/NotFound";
import { QuoteDetails } from "./pages/QuoteDetails";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>

        <Route path="/quotes/:id">
          <QuoteDetails />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
