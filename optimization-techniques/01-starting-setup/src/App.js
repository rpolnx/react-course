import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/Demolist";
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

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Show paragraph on parent!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      <Button onClick={allowToggleHandler}>Allow toggle!</Button>
      <DemoList title={"New title"} items={listItems} />
    </div>
  );
}

export default App;
