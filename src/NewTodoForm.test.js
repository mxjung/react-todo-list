import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function () {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
})

it("Shows Form", function () {
  const { queryByLabelText } = render(<TodoList />);

  // Check for form
  const textInput = queryByLabelText("Todo:");
  expect(textInput).not.toBe(null);
})
