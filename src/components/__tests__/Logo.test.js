import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../Logo";

test.skip("Should load logo component", () => {
  render(<Logo />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test.skip("Should load text inside button", () => {
  render(<Logo />);

  const buttonTxt = screen.getByText("Testing btn");

  // Assertion
  expect(buttonTxt).toBeInTheDocument();
});
