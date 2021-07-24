import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("render parent");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
      // setShowParagraph(!showParagraph); -- needs to use previously state
    }
  }, [allowToggle]); // needs to pass value evaluation as dependency or it will never re-execute

  const allowToggleHandler = useCallback(() => {
    setAllowToggle((allowToggle) => !allowToggle);
  }, []);

  // useCallback(toggle, [showParagraph]);

  // React.memo compare previously values, but functions always change references when created for components
  // to solve this, useCallback can memorize previously function
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Show paragraph on parent!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      <Button onClick={allowToggleHandler}>Allow toggle!</Button>
    </div>
  );
}

export default App;
