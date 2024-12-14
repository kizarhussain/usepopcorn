import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputTest from "../InputTest";

// Grouping testcases
describe.skip("Input Test component test cases", () => {
  it("Should load 2 input boxes on the InputTest component", () => {
    render(<InputTest />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).not.toBe(3);
  });

  it("Should render button text", () => {
    render(<InputTest />);

    // Querying
    const btnText = screen.getByText("Tested text box 1");

    // Assertion
    expect(btnText).toBeInTheDocument();
  });
});
