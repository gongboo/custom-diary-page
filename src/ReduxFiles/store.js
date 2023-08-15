import { createStore } from "redux";
import blocksReducer from "./reducers";

const store = createStore(blocksReducer);

export default store;
