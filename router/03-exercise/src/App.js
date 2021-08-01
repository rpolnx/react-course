import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

// import { NewQuote } from "./pages/NewQuote";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Layout>
  );
};

export default App;
