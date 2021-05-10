import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from './auth/UserContext';

jest.mock('./components/Synth.js', () => {
  return function DummySynth() {
    return (
      <div>DummySynth</div>
  )};
})

describe("App", () => {
  const initialState = {
    currentUser: "test"
  }

  it("renders without crashing", function() {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ initialState }}>
          <App />
        </UserContext.Provider> 
      </BrowserRouter>
    );
  });

  it("matches snapshot", function () {
    const { asFragment } = render(
      <BrowserRouter>
        <UserContext.Provider value={{ initialState }}>
          <App />
        </UserContext.Provider> 
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
})
