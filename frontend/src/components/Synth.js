import { useState, useEffect, useMemo, useContext } from "react";
import { ALLOWED_KEYS } from '../constants/layout';
import { playSynth } from '../tone/playSynth';
import * as Tone from 'tone';

import SettingsContext from "../utilities/SettingsContext";


let keyCount = 0;

// const Synth = ({ levels, waveform, octave }) => {
const Synth = () => {

  const { levels, waveform, octave} = useContext(SettingsContext);

  const [pressedKeys, setPressedKeys] = useState([]);

  const configureSynth = (obj, waveform) => { 
    console.log("creating synth");
    // console.log("waveform: " + waveform);
    // console.log("attack: " + obj.attack);
    // console.log("decay: " + obj.decay);
    // console.log("sustain: " + obj.sustain);
    // console.log("release: " + obj.release);
    
    let synth = new Tone.PolySynth(
      Tone.MonoSynth, {
        oscillator: {type: waveform},
        envelope: {
          attack: obj.attack,
          decay: obj.decay,
          sustain: obj.sustain,
          release: obj.release
        }
      }
    ).toDestination();  
  
    return synth;
     

  //POTENTIAL PHASER ADD-ON
    // const phaser = new Tone.Phaser({
    //   frequency: 15,
    //   octaves: 5,
    //   baseFrequency: 1000
    // }).toDestination();

    // let synth = new Tone.PolySynth(
    //     Tone.MonoSynth, {
    //       oscillator: {type: waveform, phase: 20},
    //       envelope: {
    //         attack: obj.attack,
    //         decay: obj.decay,
    //         sustain: obj.sustain,
    //         release: obj.release
    //       }
    //     }
    //   ).connect(phaser);  
    
    //   return synth;
  }

  const synth = useMemo( () => {
    return configureSynth(levels, waveform);
  }, [levels, waveform])

  synth.volume.value = levels.gain;

  useEffect(() => {
    const handleKeydown = (evt) => {
      console.log(ALLOWED_KEYS.includes(evt.key.toUpperCase()));

      if (ALLOWED_KEYS.includes(evt.key.toUpperCase())) {
        evt.preventDefault();
        evt.stopPropagation();
      }

      if (evt.repeat || pressedKeys.includes(evt.key.toUpperCase())) {
        return;
      }

      console.log(evt.key.toUpperCase() + ' keydown fired');

      const key = evt.key;
      setPressedKeys( [...pressedKeys, key.toUpperCase()] );

      let target = document.getElementById(evt.key.toUpperCase())
      if (target) target.classList += ' pressed';

      playSynth(evt, "attack", synth, octave);
      keyCount++;
    };

    const handleKeyup = (evt) => {
    //  console.log(evt.key.toUpperCase() + ' keyup fired');

      const removeKeyup = pressedKeys.filter(key => key !== evt.key.toUpperCase());
      setPressedKeys(removeKeyup);

      let target = document.getElementById(evt.key.toUpperCase())
      if (target) target.classList.remove('pressed');

      playSynth(evt, "release", synth, octave);
      keyCount--;
      if (keyCount === 0) setPressedKeys([]);
    };

    // const handleKeypress = (evt) => {
    //   evt.stopPropagation();
    // }
    
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);
    // window.addEventListener('keypress', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup); 
      // window.addEventListener('keypress', handleKeypress);   
    }
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pressedKeys, levels, waveform, octave]);

  return null;
}

Synth.defaultProps = {
  levels: {
    attack: 0.5,
    decay: 0.5,
    sustain: 0.5,
    release: 0.5,
    gain: 0
  },
  waveform: 'sine',
  octave: 4
}

export default Synth;