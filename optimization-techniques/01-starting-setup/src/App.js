import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("render parent");

  const toggle = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Show paragraph on parent!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggle}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
