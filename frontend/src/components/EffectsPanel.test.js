import React from "react";
import { render } from "@testing-library/react";
import EffectsPanel from "./EffectsPanel";
import UserContext from '../auth/UserContext';
// import Tone from 'tone';
// import Synth from './Synth';

jest.mock('./Synth', () => {
  return function DummySynth() {
    return (
      <div>DummySynth</div>
  )};
})



describe('Effects Panel', () => {
  const initialState = {
    currentUser: "test"
  }

  it("renders without crashing", function() {
    render(
      <UserContext.Provider value={{ initialState }}>
        <EffectsPanel />;
      </UserContext.Provider>
    );
  });
});





