import React, { useState } from "react";
import "../../../style/styles.css";

const UseStateTodos = props => {
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  const [fruit, setFruit] = useState("banana");

  const TodoClickHandler = () => {
    setTodos("Learn React");
  };

  const FruitsClickHandler = () => {
    setFruit("orange");
  };

  return (
    <div className="customizedDiv">
      <h1>Hooks: Use of useState()</h1>
      <p>{todos[0].text}</p>
      <p>{fruit}</p>
      <button onClick={TodoClickHandler}>Update TODO</button>
      <button onClick={FruitsClickHandler}>Update Fruits</button>
    </div>
  );
};

export default UseStateTodos;
