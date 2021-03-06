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
      <div className="logo">
        <h1> Mel's Bank Account </h1>
      </div>
      <div className="accountInfo">
        <h1> ${account}</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="depositWithdrawBtns">
          <button onClick={() => depositMoney(100)}> Deposit $100 </button>
          <button onClick={() => depositMoney(50)}> Deposit $50</button>
          <button onClick={() => depositMoney(10)}> Deposit $10</button>
          <button onClick={() => depositMoney(5)}> Deposit $5</button>
          <button onClick={() => depositMoney(1)}> Deposit $1</button>
        </div>
        <div className="depositWithdrawBtns">
          <button onClick={() => withdrawMoney(100)}> Withdraw $100 </button>
          <button onClick={() => withdrawMoney(50)}> Withdraw $50</button>
          <button onClick={() => withdrawMoney(10)}> Withdraw $10</button>
          <button onClick={() => withdrawMoney(5)}> Withdraw $5</button>
          <button onClick={() => withdrawMoney(1)}> Withdraw $1</button>
        </div>
      </div>
    </div>
  );
}

export default App;
