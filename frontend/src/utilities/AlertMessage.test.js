import React from "react";
import { render } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

it("renders without crashing", function() {
  render(<AlertMessage />);
});

it("matches snapshot for danger", function() {
  let messages = ["Everything is broken", "Run for the hills"];
  const { asFragment } = render(<AlertMessage type="danger" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", function() {
  let messages = ["Everything is awesome!"];
  const { asFragment } = render(<AlertMessage type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});