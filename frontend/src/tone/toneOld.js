import * as Tone from 'tone';

const configureSynth = (oscType, attackVal, decayVal, sustainVal, releaseVal) => {
  let synth = new Tone.PolySynth(
    Tone.MonoSynth, {
      oscillator: {type: oscType},
      envelope: {
        attack: attackVal,
        decay: decayVal,
        sustain: sustainVal,
        release: releaseVal
      }
    }
  ).toDestination();  

  return synth;
}

let synth = configureSynth("triangle", 0, 0, 1, 0.5);

// const synth = new Tone.PolySynth(
//   Tone.MonoSynth, {
//     oscillator: {type: 'triangle'},
//     envelope: {
//       attack: 0,
//       decay: 0,
//       sustain: 1,
//       release: 0.5
//     }
//   }
// ).toDestination();

synth.volume.value = -10;
// synth.maxPolyphony = 4;

// handles keyboard events
export const attack = (evt) => {
  // evt object has the key property to tell which key was pressed
  switch (evt.key.toLowerCase()) {
    case "capslock":
      return synth.triggerAttack("F3");    
    case "q":
      return synth.triggerAttack("F#3");       
    case "a":
      return synth.triggerAttack("G3");
    case "w":
      return synth.triggerAttack("G#3");
    case "s":
      return synth.triggerAttack("A3");
    case "e":
      return synth.triggerAttack("A#3");
    case "d":
      return synth.triggerAttack("B3");
    case "f":
      return synth.triggerAttack("C4");
    case "t":
      return synth.triggerAttack("C#4");
    case "g":
      return synth.triggerAttack("D4");
    case "y":
      return synth.triggerAttack("D#4");
    case "h":
      return synth.triggerAttack("E4");
    case "j":
      return synth.triggerAttack("F4");
    case "i":
      return synth.triggerAttack("F#4");    
    case "k":
      return synth.triggerAttack("G4");    
    case "o":
      return synth.triggerAttack("G#4");    
    case "l":
      return synth.triggerAttack("A4");    
    case "p":
      return synth.triggerAttack("A#4");    
    case ";":
      return synth.triggerAttack("B4");    
    case "'":
      return synth.triggerAttack("C5");
    default:
      return;
  }
};

// when the key is released, audio is released as well
export const release = (evt) => {
  switch (evt.key.toLowerCase()) {
    case "capslock":
      return synth.triggerRelease("F3");    
    case "q":
      return synth.triggerRelease("F#3");       
    case "a":
      return synth.triggerRelease("G3");
    case "w":
      return synth.triggerRelease("G#3");
    case "s":
      return synth.triggerRelease("A3");
    case "e":
      return synth.triggerRelease("A#3");
    case "d":
      return synth.triggerRelease("B3");
    case "f":
      return synth.triggerRelease("C4");
    case "t":
      return synth.triggerRelease("C#4");
    case "g":
      return synth.triggerRelease("D4");
    case "y":
      return synth.triggerRelease("D#4");
    case "h":
      return synth.triggerRelease("E4");
    case "j":
      return synth.triggerRelease("F4");
    case "i":
      return synth.triggerRelease("F#4");    
    case "k":
      return synth.triggerRelease("G4");    
    case "o":
      return synth.triggerRelease("G#4");    
    case "l":
      return synth.triggerRelease("A4");    
    case "p":
      return synth.triggerRelease("A#4");    
    case ";":
      return synth.triggerRelease("B4");    
    case "'":
      return synth.triggerRelease("C5");
    default:
      return;
  }
};

// export const attackRelease = (evt) => {
//   console.log(`${evt.key.toUpperCase()} played`);
//   switch (evt.key.toLowerCase()) {
//     case "capslock":
//       return synth.triggerAttackRelease("F3", "8n");    
//     case "q":
//       return synth.triggerAttackRelease("F#3", "8n");       
//     case "a":
//       return synth.triggerAttackRelease("G3", "8n");
//     case "w":
//       return synth.triggerAttackRelease("G#3", "8n");
//     case "s":
//       return synth.triggerAttackRelease("A3", "8n");
//     case "e":
//       return synth.triggerAttackRelease("A#3", "8n");
//     case "d":
//       return synth.triggerAttackRelease("B3", "8n");
//     case "f":
//       return synth.triggerAttackRelease("C4", "8n");
//     case "t":
//       return synth.triggerAttackRelease("C#4", "8n");
//     case "g":
//       return synth.triggerAttackRelease("D4", "8n");
//     case "y":
//       return synth.triggerAttackRelease("D#4", "8n");
//     case "h":
//       return synth.triggerAttackRelease("E4", "8n");
//     case "j":
//       return synth.triggerAttackRelease("F4", "8n");
//     case "i":
//       return synth.triggerAttackRelease("F#4", "8n");    
//     case "k":
//       return synth.triggerAttackRelease("G4", "8n");    
//     case "o":
//       return synth.triggerAttackRelease("G#4", "8n");    
//     case "l":
//       return synth.triggerAttackRelease("A4", "8n");    
//     case "p":
//       return synth.triggerAttackRelease("A#4", "8n");    
//     case ";":
//       return synth.triggerAttackRelease("B4", "8n");    
//     case "'":
//       return synth.triggerAttackRelease("C5", "8n");
//     default:
//       return;
//   }
// };
