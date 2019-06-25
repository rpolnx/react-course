import React, { useState } from "react";
import { connect } from "react-redux";
import Down from "./Down";

function Top(props) {
  const [state, setState] = useState({});

  const bringValue = event => {
    setState(event.target.value);
  };

  return (
    <div>
      <h1>{`Top component: ${props.texto}`}</h1>
      <Down setValue={bringValue.bind(this)} />
    </div>
  );
}

const mapStateToProps = state => ({
  texto: state.valor
});

export default connect(mapStateToProps)(Top);
