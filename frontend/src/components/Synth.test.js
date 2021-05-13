import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import { fireEvent } from '@testing-library/dom';
import Synth from "./Synth";
import * as Tone from 'tone';
import * as PlaySynth from '../tone/playSynth';
import SettingsContext from "../utilities/SettingsContext";


let levels = true;
let waveform = true;
let octave = true;

jest.mock('tone', () => {
  return jest.fn()
}) 

// jest.mock('../tone/playSynth.js', () => {
//   let playSynthFunc = jest.fn();

//   return {
//     playSynth: playSynthFunc
//   }
// });

// jest.mock('../tone/playSynth.js', () => {
//   return function playSynth() {
//     return true;
//   };
// })

// jest.spyOn(playSynth, 'playSynth').mockImplementation(() => {
  
// })

describe('Synth', () => {
  let synthSpy;
  synthSpy = jest.spyOn(PlaySynth, 'playSynth').mockImplementation();

  const mockedPolySynth = jest.fn();
  mockedPolySynth.prototype.toDestination = () => ({
    'triggerAttack': jest.fn(),
    'triggerRelease': jest.fn(),
    volume: { value: 0 },
  });

  Tone.PolySynth = mockedPolySynth;

  it("renders without crashing", function() {
    render(
      <SettingsContext.Provider value={{ levels, waveform, octave }}>
        <Synth />
      </SettingsContext.Provider>
    );
  });

  it('calls PlaySynth on keypress', () => {
    render(
      <SettingsContext.Provider value={{ levels, waveform, octave }}>
        <Synth />
      </SettingsContext.Provider>
    );

    fireEvent.keyDown(window, { key: 'a', code: '65' })
    expect(synthSpy).toBeCalledTimes(1)

    fireEvent.keyUp(window, { key: 'a', code: '65' })
    expect(synthSpy).toBeCalledTimes(2)
  })
});