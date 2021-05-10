import React, {useContext, useState} from 'react';
import './EffectsPanel.css';
import SliderForm from './SliderForm';
import WaveformForm from './WaveformForm';
import OctaveButtons from './OctaveButtons';
import Synth from './Synth';
import UserContext from "../auth/UserContext";

const EffectsPanel = () => {
  const { currentUser } = useContext(UserContext);
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
    <div className="EffectsPanel">
      <Synth levels={levels} waveform={waveform} octave={octave} />
      {/* {currentUser
      ? <> <SliderForm controls={levels} callback={setLevels} />
           <WaveformForm controls={waveform} callback={setWaveform} />
           <OctaveButtons controls={octave} callback={setOctave}/> </>
      : <h2>Log in or sign up to access more features!</h2>} */}
      <SliderForm controls={levels} callback={setLevels} />
      <WaveformForm controls={waveform} callback={setWaveform} />
      <OctaveButtons controls={octave} callback={setOctave} />  
    </div>
  )
}

export default EffectsPanel;