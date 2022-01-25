import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";

function App() {
  const state = useSelector((state) => state.account); // if you just want the account you put state.account and it'll only display the account
  const dispatch = useDispatch();

  const AC = bindActionCreators(actionCreators, dispatch);
  console.log(AC);

  return <div className="App"></div>;
}

export default App;
