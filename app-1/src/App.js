import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState(``)
  const inputHandler = (event)=>{
    setDisplayText(event.target.value)
  }
  return (
    <>
      <input onChange={inputHandler}placeholder='Enter Text to see it on the page'></input>
      <h1>{displayText}</h1>
    </>
  );
}

export default App;
