import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY = [
  { id: "q1", author: "Author 1", text: "Learning React is fun!" },
  { id: "q2", author: "Author 2", text: "Learning React is great!" },
];

export const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY} />
    </>
  );
};
