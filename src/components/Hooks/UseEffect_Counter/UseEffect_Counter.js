import React, { useState, useEffect } from "react";
import "../../../style/styles.css";

const UseEffect_Counter = props => {
  const [count, setCount] = useState(0);

  // Run all the time
  useEffect(() => {
    document.title = count;
    setTimeout(() => {
      console.log("Run all the time..");
    }, 1000);
  });

  // Run the useEffect only the first time ([])
  useEffect(() => {
    console.log("I will run only for the first time..");
  }, []);

  // Run when  the count value changed ([count])
  useEffect(() => {
    console.log("I wil run when  the count value changed..");
  }, [count]);

  return (
    <div className="customizedDiv">
      <h1>Hooks: Use of useEffect()</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffect_Counter;
