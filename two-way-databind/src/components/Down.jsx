import React, { useState } from "react";
import { connect } from "react-redux";

function Down(props) {
  const [state, setState] = useState();

  return (
    <div>
      <h1>{`Bottom component: ${state}`}</h1>

      <input
        type="text"
        name="data-down"
        id="down-input"
        onChange={e => props.novoValor(e.target.value)}
      />
      <button>Click to add top component</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  novoValor: valor => dispatch({ type: "VALUE_CHANGE", valor })
});

export default connect(null, mapDispatchToProps)(Down);
