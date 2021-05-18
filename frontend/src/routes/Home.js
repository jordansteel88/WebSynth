import React, {useState} from "react";
import "./Home.css";
import Keyboard from '../components/Keyboard';
import EffectsPanel from '../components/EffectsPanel';
import SaveForm from '../components/SaveForm';

import SettingsContext from '../utilities/SettingsContext';

const Home = () => {
  const INITIAL_STATE = {
    gain: -10,
    attack: 0.5,
    decay: 0.5,
    sustain: 0.5,
    release: 0.5
  }

  const [levels, setLevels] = useState(INITIAL_STATE);
  console.log(levels);

  const [waveform, setWaveform] = useState("sine");
  console.log(waveform);

  const [octave, setOctave] = useState(4);
  console.log(octave);

  
  
  return (
    <SettingsContext.Provider value={{ levels,
                                       setLevels,
                                       waveform,
                                       setWaveform,
                                       octave,
                                       setOctave }}>
      <div className="Home">
        <EffectsPanel /> 
        <Keyboard />
        {/* <SaveForm /> */}
      </div>
    </SettingsContext.Provider>
  );
}

export default Home;

