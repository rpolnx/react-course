import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "../actions";

const InputWay = (props) => {
  const [state, setState] = useState({ inputValue: "" });
  const inputChange = event => {
    setState({ inputValue: event.target.value });
  };
  const { clickButton } = props;
  return (
    <>
      <input onChange={inputChange} type="text" value={state.inputValue} />
      <button onClick={() => clickButton(state.inputValue)}>Click me!</button>
    </>
  );
};

const mapDispatchToProps = dispatch =>  bindActionCreators({ clickButton }, dispatch);
export default connect(null, mapDispatchToProps)(InputWay);
