import { createStore } from "redux";
import counterReducer from "../components/counter/counter.reducer.js";

const store = createStore(counterReducer);

export default store;
