import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<Todo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
})

it("Shows the Delete button", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);

  // fill out the form
  const textInput = getByLabelText("Todo:");
  fireEvent.change(textInput, { target: { value: "hello world" } });

  // Click Add Todo (1 Box)
  fireEvent.click(queryByText("Add a new Todo!"));

  // Show Delete Button
  expect(queryByText("X")).toBeInTheDocument();
})