import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";

function App() {
  const account = useSelector((state) => state.account); // if you just want the account you put state.account and it'll only display the account

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // you can destructure out deposit and withdraw from your actionCreators that you binded in this const

  return (
    <div className="App">
      <h1> {account}</h1>
      <button onClick={() => depositMoney(1)}> Deposit </button>
      <button onClick={() => withdrawMoney(1)}> Withdraw </button>
    </div>
  );
}

export default App;
