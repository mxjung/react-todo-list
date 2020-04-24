import React from "react";
import UpdateTodoForm from './UpdateTodoForm';
import './Todo.css';

/** Creates Todo component:
 *  This component should display a div with the task of the todo.
 * */

function Todo({ id, text, removeTodo, updateTodo }) {
  return (
    <div className="todo" >
      <button onClick={(evt) => removeTodo(id)}>X</button>
      <div className="text">
        {/* {text} */}

        {/* <form>
          <label htmlFor="text"></label>
          <input className="textInput"
            id="text"
            name="text"
            value={text}
          />
        </form> */}
        <UpdateTodoForm updateTodo={updateTodo} INITIAL_VALUE={{id: id, text: text}}/>
      </div>
    </div>
  )
}

export default Todo;