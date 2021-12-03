import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [uname, setUname] = useState(``)
  const [pass, setPass] = useState(``)
  const unameHandle = (event)=>{
    setUname(event.target.value)
  }
  const passHandle = (event)=>{
    setPass(event.target.value)
  }
  const submitHandler = () =>{
    alert(`Username: ${uname} Password: ${pass}`)
  }
  return (
    <>
    <input onChange={unameHandle}></input>
    <input onChange={passHandle}></input>
    <button onClick={submitHandler}>submit</button>
    </>
  );
}

export default App;
