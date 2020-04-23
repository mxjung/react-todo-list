import React from "react";
import './Todo.css';

/** Creates Todo component:
 *  This component should display a div with the task of the todo.
 * */ 

function Todo({ id, text, removeTodo }) {
  return (
    <div className="todo" >
      <button onClick={(evt) => removeTodo(id)}>X</button>
      <div className="text">
        {text}
      </div>
    </div>
  )
}

export default Todo;