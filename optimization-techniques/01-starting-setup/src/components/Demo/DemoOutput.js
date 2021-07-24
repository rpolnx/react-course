import React from "react";

function DemoOutput(props) {
  console.log(
    "render child - React evaluates only virtual dom if is set to false"
  );

  // Better than render all component, but actually evaluate it on virtual dom
  return (
    <>
      <p>{props.show ? "This is new!" : ""}</p>
    </>
  );
}

export default React.memo(DemoOutput); // react memo forces to reevaluate only if props or state change
