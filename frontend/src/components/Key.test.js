import React from "react";
import { render } from "@testing-library/react";
import Key from "./Key";

it("renders without crashing", function() {
  render(<Key />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Key />);
  expect(asFragment()).toMatchSnapshot();
});