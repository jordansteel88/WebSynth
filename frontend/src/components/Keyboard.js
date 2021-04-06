import React, { useMemo } from 'react';
import './Keyboard.css';
import Key from './Key'
import { NOTES, N2K } from '../constants/layout';
// import { playSynth } from '../tone/playSynth';

// let keyCount = 0;

const Keyboard = ({ synth }) => {
  // const [pressedKeys, setPressedKeys] = useState([]);
  // // let synth = configureSynth();
  // // console.log(synth);

  // useEffect(() => {
  //   const handleKeydown = (evt) => {
  //     console.log(evt.key.toUpperCase() + ' keydown fired');

  //     if (ALLOWED_KEYS.includes(evt.key.toUpperCase())) {
  //       evt.preventDefault();
  //     }

  //     if (evt.repeat || pressedKeys.includes(evt.key.toUpperCase())) {
  //       return;
  //     }

  //     const key = evt.key;
  //     setPressedKeys( [...pressedKeys, key.toUpperCase()] );

  //     let target = document.getElementById(evt.key.toUpperCase())
  //     if (target) target.classList += ' pressed';

  //     playSynth(evt, "attack", synth);
  //     keyCount++;
  //   };

  //   const handleKeyup = (evt) => {
  //    console.log(evt.key.toUpperCase() + ' keyup fired');

  //     const removeKeyup = pressedKeys.filter(key => key !== evt.key.toUpperCase());
  //     setPressedKeys(removeKeyup);

  //     let target = document.getElementById(evt.key.toUpperCase())
  //     if (target) target.classList.remove('pressed');

  //     playSynth(evt, "release", synth);
  //     keyCount--;
  //     if (keyCount === 0) setPressedKeys([]);
  //   };
    
  //   window.addEventListener('keydown', handleKeydown);
  //   window.addEventListener('keyup', handleKeyup);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeydown)
  //     window.removeEventListener('keyup', handleKeyup);    
  //   }
  // //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pressedKeys]);


  const keys = NOTES.map(key => {
    return (
      <Key 
        key={key}
        note={N2K[key]}
        isFlat={key.length > 2}
        capsLock={N2K[key] === "CAPSLOCK"}
      />
    )
  })

  return useMemo( () => (
    <div className="Piano">
      {keys}
    </div>
  ), [keys])
}

export default Keyboard;