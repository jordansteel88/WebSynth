import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WaveformForm from "./WaveformForm";
import SettingsContext from "../utilities/SettingsContext";

describe('Waveform Form', () => {

  let waveform = "sine";
  let setWaveform = jest.fn();

  it("radio sine click should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ waveform, setWaveform }}>
        <WaveformForm />
      </SettingsContext.Provider>
    );
   
    expect(setWaveform).toBeCalledTimes(0);

    let triangleEl = getByRole('radio', {name: /triangle/i});
    userEvent.click(triangleEl);
    expect(setWaveform).toBeCalledTimes(1);

    let sineEl = getByRole('radio', {name: /sine/i});
    userEvent.click(sineEl);
    expect(setWaveform).toBeCalledTimes(2);
  });  
  
  it("radio triangle click should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ waveform, setWaveform }}>
        <WaveformForm />
      </SettingsContext.Provider>
    );
   
    expect(setWaveform).toBeCalledTimes(0);

    let el = getByRole('radio', {name: /triangle/i});
    userEvent.click(el);
    expect(setWaveform).toBeCalledTimes(1);
  });  
  
  it("radio sawtooth click should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ waveform, setWaveform }}>
        <WaveformForm />
      </SettingsContext.Provider>
    );
   
    expect(setWaveform).toBeCalledTimes(0);

    let el = getByRole('radio', {name: /triangle/i});
    userEvent.click(el);
    expect(setWaveform).toBeCalledTimes(1);
  });  
  
  it("radio square click should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ waveform, setWaveform }}>
        <WaveformForm />
      </SettingsContext.Provider>
    );
   
    expect(setWaveform).toBeCalledTimes(0);

    let el = getByRole('radio', {name: /triangle/i});
    userEvent.click(el);
    expect(setWaveform).toBeCalledTimes(1);
  });

});

