import React, { useState, useEffect } from "react";
import "../../../style/styles.css";

const UseEffectCounter = props => {
  const [count, setCount] = useState(0);

  // useEffect run all the time  and clean up
  useEffect(() => {
    document.title = count;
    const timer = setTimeout(() => {
      console.log("Run all the time..");
    }, 1000);
    return () => {
      console.log("Clean Up Work using useEffect()");
      clearTimeout(timer);
    };
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

export default UseEffectCounter;
