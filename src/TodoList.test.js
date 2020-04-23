import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it("Adds Todos", function () {
  const { queryByText, getByLabelText, queryAllByText } = render(<TodoList />);

  // fill out the form (for Todo 1)
  const textInput = getByLabelText("Todo:");
  fireEvent.change(textInput, { target: { value: "hello world" } });

  // Click Add Button (1 Box)
  fireEvent.click(queryByText("Add a new Todo!"));
  expect(queryByText("hello world")).toBeInTheDocument();
  expect(queryAllByText("X").length).toBe(1);

  // fill out the form (for Todo 2)
  const textInput2 = getByLabelText("Todo:");
  fireEvent.change(textInput2, { target: { value: "hello world again" } });

  // Click Add Button (2 Boxes)
  fireEvent.click(queryByText("Add a new Todo!"));
  expect(queryByText("hello world again")).toBeInTheDocument();
  expect(queryAllByText("X").length).toBe(2);
})

it("Deletes Todos", function () {
  const { queryByText, getByLabelText, queryAllByText } = render(<TodoList />);

  // fill out the form (for Todo 1)
  const textInput = getByLabelText("Todo:");
  fireEvent.change(textInput, { target: { value: "hello world" } });

  // Click Add Button (1 Box)
  fireEvent.click(queryByText("Add a new Todo!"));
  expect(queryByText("hello world")).toBeInTheDocument();
  expect(queryAllByText("X").length).toBe(1);

  // Click Delete 
  const deleteBtn = queryByText('X');
  fireEvent.click(deleteBtn);

  // Check that Todo element is no longer on page
  expect(queryByText("hello world")).not.toBeInTheDocument();
})