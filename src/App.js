import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector((state) => state.account); // if you just want the account you put state.account and it'll only display the account

  console.log(state);
  return <div className="App"></div>;
}

export default App;
