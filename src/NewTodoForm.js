import React, { useState } from "react";

/** Creates NewTodoForm component:
 *  This component should render a form with one text input for the task to be created. 
 *  When this form is submitted, a new Todo component should be created.
 * */

function NewTodoForm({addTodo}) {
  const INITIAL_STATE = { text: "" };
  const [formData, setFormData] = useState({...INITIAL_STATE});

  // IF: we hasn't spread {...INITIAL_STATE} into useState, and we had executed the line below, 
  // our INITIAL_STATE would be changed as well, since formData (if initial_state is not spread/slice)
  // would be pointing to the same place in memory as INITIAL STATE. Same reason why I spread Initial state
  // in handleSubmit();
  // IF BY ACCIDENT: formData.text = "hello there";
  
  /** Send {text} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData({...INITIAL_STATE});
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  // text isn't the best description ***** taskTitle, taskName, etc
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo:</label>
      <input
        id="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />

      <button>Add a new Todo!</button>
    </form>
  );
}

export default NewTodoForm;