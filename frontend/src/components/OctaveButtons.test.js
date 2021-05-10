import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OctaveButtons from "./OctaveButtons";

describe('Octave Buttons', () => {

  let setOctave = jest.fn();

  it("button up click should call function", function () {
    const { getByRole } = render(<OctaveButtons 
                                    controls={4} 
                                    callback={setOctave} />);
   
    expect(setOctave).toBeCalledTimes(1);

    let el = getByRole('button', {name: /\+/i});
    userEvent.click(el);
    expect(setOctave).toBeCalledTimes(2);
  });  
  
  it("button down click should call function", function () {
    const { getByRole } = render(<OctaveButtons 
                                    controls={4} 
                                    callback={setOctave} />);
   
    expect(setOctave).toBeCalledTimes(1);

    let el = getByRole('button', {name: /\-/i});
    userEvent.click(el);
    expect(setOctave).toBeCalledTimes(2);
  });

});
