import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "./hero";

test("renders Shopping card as a text", () => {
  render(<Hero />);
  const linkElement = screen.getByText(/Shopping Card/i);
  expect(linkElement).toBeInTheDocument();
});
