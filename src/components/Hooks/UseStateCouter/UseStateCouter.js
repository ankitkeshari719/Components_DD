import React, { useState } from "react";
import "../../../style/styles.css";

const UseStateCouter = props => {
  const [count, setCount] = useState(0);

  return (
    <div className="customizedDiv">
      <h1>Hooks: Use of useState()</h1>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Update Count
      </button>
    </div>
  );
};

export default UseStateCouter;
