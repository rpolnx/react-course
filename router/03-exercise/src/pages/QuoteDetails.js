import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY = [
  { id: "q1", author: "Author 1", text: "Learning React is fun!" },
  { id: "q2", author: "Author 2", text: "Learning React is great!" },
];

export const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY.find((it) => it.id === params.id);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
