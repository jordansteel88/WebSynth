// import * as Tone from 'tone';

export const playSynth = (evt, type, synth, octave) => {
  if (type === "attack") {
    // console.log(evt.key + " attacked");
    switch (evt.key.toLowerCase()) {
      case "capslock":
        return synth.triggerAttack(`F${octave-1}`);    
      case "q":
        return synth.triggerAttack(`F#${octave-1}`);       
      case "a":
        return synth.triggerAttack(`G${octave-1}`);
      case "w":
        return synth.triggerAttack(`G#${octave-1}`);
      case "s":
        return synth.triggerAttack(`A${octave-1}`);
      case "e":
        return synth.triggerAttack(`A#${octave-1}`);
      case "d":
        return synth.triggerAttack(`B${octave-1}`);
      case "f":
        return synth.triggerAttack(`C${octave}`);
      case "t":
        return synth.triggerAttack(`C#${octave}`);
      case "g":
        return synth.triggerAttack(`D${octave}`);
      case "y":
        return synth.triggerAttack(`D#${octave}`);
      case "h":
        return synth.triggerAttack(`E${octave}`);
      case "j":
        return synth.triggerAttack(`F${octave}`);
      case "i":
        return synth.triggerAttack(`F#${octave}`);
      case "k":
        return synth.triggerAttack(`G${octave}`);
      case "o":
        return synth.triggerAttack(`G#${octave}`);
      case "l":
        return synth.triggerAttack(`A${octave}`);
      case "p":
        return synth.triggerAttack(`A#${octave}`);
      case ";":
        return synth.triggerAttack(`B${octave}`);
      case "'":
        return synth.triggerAttack(`C${octave+1}`);
      default:
        return;
    }
  } else {
    // console.log(evt.key + " released");
    switch (evt.key.toLowerCase()) {
      case "capslock":
        return synth.triggerRelease(`F${octave-1}`);    
      case "q":
        return synth.triggerRelease(`F#${octave-1}`);       
      case "a":
        return synth.triggerRelease(`G${octave-1}`);
      case "w":
        return synth.triggerRelease(`G#${octave-1}`);
      case "s":
        return synth.triggerRelease(`A${octave-1}`);
      case "e":
        return synth.triggerRelease(`A#${octave-1}`);
      case "d":
        return synth.triggerRelease(`B${octave-1}`);
      case "f":
        return synth.triggerRelease(`C${octave}`);
      case "t":
        return synth.triggerRelease(`C#${octave}`);
      case "g":
        return synth.triggerRelease(`D${octave}`);
      case "y":
        return synth.triggerRelease(`D#${octave}`);
      case "h":
        return synth.triggerRelease(`E${octave}`);
      case "j":
        return synth.triggerRelease(`F${octave}`);
      case "i":
        return synth.triggerRelease(`F#${octave}`);
      case "k":
        return synth.triggerRelease(`G${octave}`);
      case "o":
        return synth.triggerRelease(`G#${octave}`);
      case "l":
        return synth.triggerRelease(`A${octave}`);
      case "p":
        return synth.triggerRelease(`A#${octave}`);
      case ";":
        return synth.triggerRelease(`B${octave}`);
      case "'":
        return synth.triggerRelease(`C${octave+1}`);
      default:
        return;
    }  
  }
};

