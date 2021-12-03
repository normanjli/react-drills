import React, {useState} from 'react';

const NewTask = ({add}) => {
  const [text,setText] = useState(``)
  const inputHandler= (event) =>{
    setText(event.target.value)
  }
  return (
  <>
    <h1>My to-do list:</h1>
    <input onChange={inputHandler}/>
    <button onClick={()=>add(text)}>submit</button>
    </>
    );
};

export default NewTask;