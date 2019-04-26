import React, { useState } from "react";
import "./UseState_Couter.css";

const UseState_Couter = props => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="counterClass">
      <h1>Hooks: Use of useState()</h1>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Update Count
      </button>
    </div>
  );
};

export default UseState_Couter;
