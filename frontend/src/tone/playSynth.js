// import * as Tone from 'tone';

export const playSynth = (evt, type, synth) => {
  if (type === "attack") {
    // console.log(evt.key + " attacked");
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
  } else {
    // console.log(evt.key + " released");
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
  }
};

