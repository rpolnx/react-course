import React from "react";
import { connect } from "react-redux";

const InputTwoWay = props => {
  const { newValue } = props;
  return (
    <>
      <h1>Binding elements with Redux</h1>
      <h3 style={{color: "red"}}>{newValue}</h3>
    </>
  );
};
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
export default connect(mapStateToProps)(InputTwoWay);
