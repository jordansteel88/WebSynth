# WebSynth

Backend repo at https://github.com/jordansteel88/WebSynth_backend

Websynth is a music synthesizer application that utilizes the Tone.js library to manipulate the Web Audio API. It allows a user to adjust a number of traditional synth parameters to construct customizable sounds, and then perform using that sound profile via an onscreen piano mapped to the user's keyboard. You can try out WebSynth [here](https://faithful-activity.surge.sh/)!

### Getting Started
Upon navigating to the [Websynth homepage](https://faithful-activity.surge.sh/), the synth is ready to play with a default sound profile. Navigate to the ***Sign Up*** link in the navigation bar, and use those credentials for subsequent logins to access all the features of WebSynth!

### Design Choices

#### Back End
I wanted to build an app utilizing the Tone.js library because of its extraordinarily helpful abstraction of the Web Audio API. In addition to the simplicity of setting up a polyphonic synthesizer instance, Tone.js offers a number of audio processing effects that can be chained onto this instance. This is an ongoing project, so check back for newly implemented features!

#### Front End
I chose to build the front end in React, utilizing its Context API to manage state between the Keyboard, Effects Panel, and Synth components. This allows the instantiation of a new Synth whenever the user adjusts any audio effect on the Effects Panel, and the user to immediately hear those changes in the audio output.  

### Creating Your Own Sounds
The default settings are mid-level all the way across the envelope (details below), mid-octave (C4), and sine waveform. The sliders on the envelope, the type of waveform, and the octave can all be adjusted by the user.

#### Envelope
The ADSR envelope contains a set of data points that tell a synth how to change its sound over time. It consists of:
1. attack - time from nil to peak sound
2. decay - time from peak to designated sustain level
3. sustain - level of sound after decay until the key is released
4. release - time from sustain level back to nil

Check out this [helpful diagram](https://en.wikipedia.org/wiki/Envelope_(music)#/media/File:ADSR_parameter.svg) for a better understanding of how the envelope works.

##### NOTE: The amplitude (volume) slider appears in the envelope settings for now, but this may be adjusted as more features are added.

#### Waveform
The waveform of the audio signal is the [shape of its graph](https://en.wikipedia.org/wiki/Waveform#/media/File:Waveforms.svg) as a function of time. There are four options to choose from that create four distinct timbres:
1. Sine - default sine wave, smooth and pure
2. Triangle - linear peaks, brighter than sine but less overtones than square
3. Square - noticeable overtones, bright but cold and hollow
4. Sawtooth - much more noticeable overtones, bright and harsh  

#### Octave
The octave designation determines the frequency range for the pitches triggered by the keyboard. In the default layout, laying the 'C' in the middle of the keyboard will trigger a middle C, or C4, at a frequency of about 262 Hz. Pressing the octave ***+*** button will approximately double the frequency of each pitch, so the same key will now trigger a C5 at a frequency of 523.25 Hz. Here is a [helpful chart](http://www.sengpielaudio.com/calculator-notenames.htm) mapping all 88 keys of a piano to their respective frequencies.

### To-Do's
- Implement profile save and load
- Add low pass filter
- Add phaser
- Add arpeggiiator

### Technologies
#### Back End
- deployed with Heroku
- Node/Express 
- PostgreSQL

#### Front End
- deployed with Surge
- React for component architecture, view rendering, and state management
- Bootstrap for layout







