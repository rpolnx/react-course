const initialSate = { counter: 5, showCounter: true };

const counterReducer = (state = initialSate, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

export default counterReducer;
