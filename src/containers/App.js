import React, { Component } from "react";
import "./App.css";
import CounterUpdate from "../components/Hooks/UseState_Counter/UseState_Couter";

class App extends Component {
  render() {
    return (
      <div>
        <CounterUpdate />
      </div>
    );
  }
}

export default App;
