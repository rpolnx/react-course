import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

export const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("/quotes"); // redirect, but do not save old history
  };
  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
    </>
  );
};
