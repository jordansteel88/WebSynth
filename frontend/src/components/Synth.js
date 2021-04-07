import { useState, useEffect, useMemo } from "react";
import { ALLOWED_KEYS } from '../constants/layout';
import { playSynth } from '../tone/playSynth';
import * as Tone from 'tone';


let keyCount = 0;

const Synth = ({ levels }) => {
  const [pressedKeys, setPressedKeys] = useState([]);

  const configureSynth = (obj) => {
    // console.log('****** levels *****');
    // console.log(obj);
    // console.log('****** levels ******');
  
  
    console.log("creating synth");
    let synth = new Tone.PolySynth(
      Tone.MonoSynth, {
        oscillator: {type: "triangle"},
        envelope: {
          attack: obj.attack,
          decay: obj.decay,
          sustain: obj.sustain,
          release: obj.release
        }
      }
    ).toDestination();  
  
    return synth;
  }

  const synth = useMemo( () => {
    return configureSynth(levels);
  }, [levels])

  // console.log("gain: " + levels.gain);
  // console.log(typeof levels.gain);
  synth.volume.value = levels.gain;
  // console.log("synth volume: " + synth.volume.value);


  // console.log('%%%%%%% synth %%%%%%%%');
  // console.log(synth);
  // console.log('%%%%%%% synth %%%%%%%%');

  useEffect(() => {
    const handleKeydown = (evt) => {

      if (ALLOWED_KEYS.includes(evt.key.toUpperCase())) {
        evt.preventDefault();
      }

      if (evt.repeat || pressedKeys.includes(evt.key.toUpperCase())) {
        return;
      }

      console.log(evt.key.toUpperCase() + ' keydown fired');

      const key = evt.key;
      setPressedKeys( [...pressedKeys, key.toUpperCase()] );

      let target = document.getElementById(evt.key.toUpperCase())
      if (target) target.classList += ' pressed';

      playSynth(evt, "attack", synth);
      keyCount++;
    };

    const handleKeyup = (evt) => {
    //  console.log(evt.key.toUpperCase() + ' keyup fired');

      const removeKeyup = pressedKeys.filter(key => key !== evt.key.toUpperCase());
      setPressedKeys(removeKeyup);

      let target = document.getElementById(evt.key.toUpperCase())
      if (target) target.classList.remove('pressed');

      playSynth(evt, "release", synth);
      keyCount--;
      if (keyCount === 0) setPressedKeys([]);
    };
    
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup);    
    }
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pressedKeys, levels]);

  return null;
}

export default Synth;