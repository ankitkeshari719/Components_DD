import React, { Component } from "react";
import CounterUpdate from "../components/Hooks/UseState_Counter/UseState_Couter";
import UseStateTodos from "../components/Hooks/UseState_Todos/UseState_Todos";
import UseEffectCounter from "../components/Hooks/UseEffect_Counter/UseEffect_Counter";

class App extends Component {
  render() {
    return (
      <div>
        <CounterUpdate />
        <UseStateTodos />
        <UseEffectCounter/>
      </div>
    );
  }
}

export default App;
