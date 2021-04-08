import React, {useState} from 'react';
import './SliderPanel.css';
import SliderForm from './SliderForm';
import Synth from './Synth';

const EffectsPanel = () => {
  const INITIAL_STATE = {
    gain: 0,
    attack: 0.5,
    decay: 0.5,
    sustain: 0.5,
    release: 0.5
  }

  const [levels, setLevels] = useState(INITIAL_STATE);
  // console.log(levels);

  return ( 
    <div className="SliderPanel">
      <SliderForm controls={levels} callback={setLevels} />
      <Synth levels={levels} />
    </div>
  )
}

export default EffectsPanel;