import React from "react";
import { render } from "@testing-library/react";
import Keyboard from "./Keyboard";

it("renders without crashing", function() {
  render(<Keyboard />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Keyboard />);
  expect(asFragment()).toMatchSnapshot();
});