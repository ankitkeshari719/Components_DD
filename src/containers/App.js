import React, { Component } from "react";
import {
  UseEffectCounter,
  UseStateCouter,
  UseStateTodos
} from "../components/Hooks";

class App extends Component {
  render() {
    return (
      <div>
        <UseStateCouter />
        <UseStateTodos />
        <UseEffectCounter />
      </div>
    );
  }
}

export default App;
