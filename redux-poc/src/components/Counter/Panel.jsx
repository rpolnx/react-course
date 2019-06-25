import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { upTime, downTime } from "../../actions";
import "./Panel.css";

const Panel = props => {
  const { upTime, downTime } = props;

  const pulseClock = () => {
    setTimeout(() => {
      upTime();
      pulseClock();
    }, 1000);
  };

  pulseClock();

  return (
    <>
      <div>
        <div className="div-formal">
          <span onClick={() => upTime()}>+</span>
        </div>
        <div className="div-formal">
          <span onClick={() => downTime()}>-</span>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ upTime, downTime }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Panel);

//   <button onClick={() => clickButton(state.inputValue)}>Click me!</button>
