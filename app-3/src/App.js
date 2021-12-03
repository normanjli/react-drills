import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const array = ["panda", "dog", "cat", "lemur", "john"];
  const [displayed, setdisplayed] = useState(
    array.map((ele) => <h2>{ele}</h2>)
  );
  const inputHandler = (event) => {
    setdisplayed(
      array
        .filter(ele => ele.startsWith(event.target.value))
        .map((ele) => <h2>{ele}</h2>)
    );
  };
  return (
    <>
      <input onChange={inputHandler}></input>
      {displayed}
    </>
  );
}

export default App;
