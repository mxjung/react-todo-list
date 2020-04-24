import React, { useState } from "react";

/** Creates UpdateTodoForm component:
 *  This component should render a form with one text input for the task to be updated. 
 *  When this form is submitted, a Todo component should be updated.
 * */

function UpdateTodoForm({updateTodo, INITIAL_VALUE}) {
  const [formData, setFormData] = useState({...INITIAL_VALUE});
  
  /** Send {text} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    updateTodo(formData);
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
      <label htmlFor="text"></label>
      <input className="textInput"
        id="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      
    </form>
  );
}

export default UpdateTodoForm;