import React,{useState} from "react";
import "./App.css";
import Todo from "./components/todo/todo";
function App() {
  const [list, setList] = useState([])
  const [text,setText] = useState(``)
  const inputHandler= (event) =>{
    setText(event.target.value)
  }
  const submitHandler= () =>{
    setList(list.concat(<Todo text={text}/>))
  }
  return (
  <>
    <h1>My to-do list:</h1>
    <input onChange={inputHandler}/>
    <button onClick={submitHandler}>submit</button>
    {list}
  </>
  );
}

export default App;
