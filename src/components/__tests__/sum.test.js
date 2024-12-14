import { sum } from "./../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});

// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import MOCK_DATA from "../mocks/watchedMovie.json";
// import WatchedMovie from "../WatchedMovie";

// it("Should render MovieList component with props Data", () => {
//   render(<WatchedMovie wachedMovieData={MOCK_DATA} />);

//   const name = screen.getByText("Master");

//   expect(name).toBeInTheDocument();
// });
