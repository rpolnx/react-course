import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  toggle,
  selectCount,
  selectShow,
} from "./counter.slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);
  const showCounter = useSelector(selectShow);

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const increaseByHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => increaseByHandler(1)}>Increment</button>
        <button onClick={() => increaseByHandler(5)}>Increase by 5</button>
      </div>
      <div>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
        <button onClick={() => decrementHandler(5)}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
