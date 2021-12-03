import React,{useState} from "react";
import "./App.css";
import Todo from "./components/todo/todo";
import NewTask from "./components/newtask/newtask";
import List from "./components/list/list";
function App() {
  const [list, setList] = useState([])
  const handleAddList= (text) =>{
    setList(list.concat(text))
  }
  return (
  <>
  <NewTask add={handleAddList}/>
  <Todo list={list}/>
  <List list={list}/>
  </>
  );
}

export default App;
