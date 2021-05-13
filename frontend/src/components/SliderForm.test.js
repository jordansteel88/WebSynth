import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SliderForm from "./SliderForm";
import SettingsContext from "../utilities/SettingsContext";

describe('Slider Form', () => {

  let levels = {attack: true}

  let setLevels = jest.fn();

  // beforeEach(() => {
  //   const { getByRole } = render(
  //     <SettingsContext.Provider value={{ levels, setLevels }}>
  //       <SliderForm />
  //     </SettingsContext.Provider>
  //   );
  // })

  it("attack slide should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ levels, setLevels }}>
        <SliderForm />
      </SettingsContext.Provider>
    );
   
    expect(setLevels).toBeCalledTimes(0);

    let el = getByRole('slider', {name: /attack/i});
    userEvent.click(el);
    expect(setLevels).toBeCalledTimes(1);
  });  
  
  it("decay slide should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ levels, setLevels }}>
        <SliderForm />
      </SettingsContext.Provider>
    );
   
    expect(setLevels).toBeCalledTimes(0);

    let el = getByRole('slider', {name: /decay/i});
    userEvent.click(el);
    expect(setLevels).toBeCalledTimes(1);
  });  
  
  it("sustain slide should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ levels, setLevels }}>
        <SliderForm />
      </SettingsContext.Provider>
    );
   
    expect(setLevels).toBeCalledTimes(0);

    let el = getByRole('slider', {name: /sus/i});
    userEvent.click(el);
    expect(setLevels).toBeCalledTimes(1);
  });  
  
  it("release slide should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ levels, setLevels }}>
        <SliderForm />
      </SettingsContext.Provider>
    );
   
    expect(setLevels).toBeCalledTimes(0);

    let el = getByRole('slider', {name: /release/i});
    userEvent.click(el);
    expect(setLevels).toBeCalledTimes(1);
  });  
  
  it("gain slide should call function", function () {
    const { getByRole } = render(
      <SettingsContext.Provider value={{ levels, setLevels }}>
        <SliderForm />
      </SettingsContext.Provider>
    );
   
    expect(setLevels).toBeCalledTimes(0);

    let el = getByRole('slider', {name: /amp/i});
    userEvent.click(el);
    expect(setLevels).toBeCalledTimes(1);
  });  

});

