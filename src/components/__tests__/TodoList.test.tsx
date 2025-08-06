import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders empty state initially", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByTestId("todo-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-todo-button")).toBeInTheDocument();
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  test("adds a new todo when add button is clicked", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test todo")).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(screen.queryByTestId("empty-state")).not.toBeInTheDocument();
  });

  test("adds a new todo when Enter key is pressed", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");

    fireEvent.change(input, { target: { value: "Test todo with Enter" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Test todo with Enter")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("does not add empty todos", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    // Try to add empty todo
    fireEvent.click(addButton);
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();

    // Try to add todo with only spaces
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addButton);
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  test("toggles todo completion when checkbox is clicked", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    // Add a todo
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(addButton);

    const todoText = screen.getByText("Test todo");
    const checkbox = screen.getByTestId(/todo-checkbox-\d+/);

    // Initially not completed
    expect(todoText).not.toHaveClass("line-through");
    expect(checkbox).not.toBeChecked();

    // Toggle completion
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(todoText).toHaveClass("line-through");

    // Toggle back
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(todoText).not.toHaveClass("line-through");
  });

  test("deletes todo when delete button is clicked", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    // Add a todo
    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test todo")).toBeInTheDocument();

    // Delete the todo
    const deleteButton = screen.getByTestId(/delete-todo-\d+/);
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Test todo")).not.toBeInTheDocument();
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  test("handles multiple todos correctly", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    // Add multiple todos
    fireEvent.change(input, { target: { value: "First todo" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Second todo" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Third todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("First todo")).toBeInTheDocument();
    expect(screen.getByText("Second todo")).toBeInTheDocument();
    expect(screen.getByText("Third todo")).toBeInTheDocument();

    // Delete middle todo
    const deleteButtons = screen.getAllByTestId(/delete-todo-\d+/);
    fireEvent.click(deleteButtons[1]); // Delete second todo

    expect(screen.getByText("First todo")).toBeInTheDocument();
    expect(screen.queryByText("Second todo")).not.toBeInTheDocument();
    expect(screen.getByText("Third todo")).toBeInTheDocument();
  });
});
