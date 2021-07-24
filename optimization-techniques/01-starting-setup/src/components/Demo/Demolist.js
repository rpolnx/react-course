import React from "react";

function DemoList({ title, items }) {
  const sortedList = items.sort((a, b) => a - b);

  console.log("Demo list render");

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(DemoList);
