import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// if you don't apply the middleware with thunk it won't make the connection
// to go though when you call it in a function

// import thunk from redux thunk and applyMiddleware from redux
