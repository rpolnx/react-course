import React from "react";
import { Route, useParams } from "react-router-dom";

const User = () => {
  // @ts-ignore
  const { user } = useParams();

  return (
    <div>
      <p>Welcome, {user}</p>
    </div>
  );
};

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/:user">
        <User />
      </Route>
    </section>
  );
};

export default Welcome;
