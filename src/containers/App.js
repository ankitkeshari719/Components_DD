import React, { Component } from "react";
import "./App.css";
import CounterUpdate from "../components/Hooks/UseState_Counter/UseState_Couter";
import UseStateTodos from "../components/Hooks/UseState_Todos/UseState_Todos";

class App extends Component {
  render() {
    return (
      <div>
        <CounterUpdate />
        <UseStateTodos/>
      </div>
    );
  }
}

export default App;
