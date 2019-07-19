import React from "react";
import { connect } from "react-redux";

const Visor = props => {
  const { current } = props;
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "50px" }}>{current}</h1>
    </>
  );
};

const mapStateToProps = store => ({
  current: store.timeState.current
});

export default connect(mapStateToProps)(Visor);
