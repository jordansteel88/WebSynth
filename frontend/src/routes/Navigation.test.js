import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

it("renders without crashing", function() {
  render(<Navigation />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Navigation />);
  expect(asFragment()).toMatchSnapshot();
});