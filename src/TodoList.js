import React, { useState } from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {v4 as uuid} from "uuid";
import './TodoList.css';

/**
 *  TodoList - this component should render the NewTodoForm component and should 
 *  render the list of Todo components. Place your state that contains all of the 
 *  todos in this component.
 */
function TodoList() {
  const [todos, setTodos] = useState([]);

  // Function that will be passed into NewTodoForm to update the todos state
  const addTodo = (todo) => {
    let newTodo = {
      ...todo,
      id: uuid(),
      text: todo.text
    };
    setTodos(todos => [...todos, newTodo]);
  }

  // Function that will be passed into Todo update a todo
  const updateTodo = (targetTodo) => {
    setTodos(todos => {
      let oldTodos = [...todos];
      const updatedTodos = oldTodos.map(todo => {
        if (todo.id === targetTodo.id) {
          // id should remain the same
          return {...todo, text: targetTodo.text}
        } else {
          return {...todo};
        }
      });
      // dont need to make new var
      return updatedTodos;
    })
  }

  // Function that will be passed into Todo to delete Todo and update the todos state
  const removeTodo = (deleteId) => {
    setTodos(todos => {
      let oldTodos = [...todos];
      const newTodos = oldTodos.filter(targetTodo => 
        deleteId !== targetTodo.id
      );
      return newTodos;
    })
  }

  // Function that will be update List showing all todos
  const renderTodos = () => {
    return (
      <div className="todolist">
      {todos.map(todo => (
        // <div key={todo.id}> // this would have worked, but no reason to, you can have it on Todo component
        // key has to go on what i map through
          <Todo key={todo.id} id={todo.id} text={todo.text} removeTodo={removeTodo} updateTodo={updateTodo}/>
        // </div>
      ))}
      </div>
    )
  }

  return (
    <div className="todoApp">
      <h2>Todo App</h2>
      {<NewTodoForm addTodo={addTodo} />}
      {renderTodos()}
    </div>
  )
}

export default TodoList;