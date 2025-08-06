import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter Component", () => {
  test("renders with default props", () => {
    render(<Counter />);

    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByTestId("count-display")).toHaveTextContent("0");
    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
    expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });

  test("renders with custom props", () => {
    render(<Counter initialValue={5} label="Custom Counter" />);

    expect(screen.getByText("Custom Counter")).toBeInTheDocument();
    expect(screen.getByTestId("count-display")).toHaveTextContent("5");
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");
    const countDisplay = screen.getByTestId("count-display");

    expect(countDisplay).toHaveTextContent("0");

    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent("1");

    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent("2");
  });

  test("decrements count when decrement button is clicked", () => {
    render(<Counter initialValue={5} />);

    const decrementButton = screen.getByTestId("decrement-button");
    const countDisplay = screen.getByTestId("count-display");

    expect(countDisplay).toHaveTextContent("5");

    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent("4");

    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent("3");
  });

  test("resets count to initial value when reset button is clicked", () => {
    render(<Counter initialValue={10} />);

    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    const countDisplay = screen.getByTestId("count-display");

    // Increment a few times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(countDisplay).toHaveTextContent("13");

    // Reset
    fireEvent.click(resetButton);
    expect(countDisplay).toHaveTextContent("10");
  });

  test("can go below zero", () => {
    render(<Counter />);

    const decrementButton = screen.getByTestId("decrement-button");
    const countDisplay = screen.getByTestId("count-display");

    expect(countDisplay).toHaveTextContent("0");

    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent("-1");

    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent("-2");
  });
});
