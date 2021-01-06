import './App.css';
import bagelNoise1 from './audio/16.wav'
import bagelNoise2 from './audio/13.mp3'
import BuildTrack from './audio/Build.wav'
import AfroTrack from './audio/AfroSynth.wav'
import React from 'react';
import MusicSelect from './MusicSelect'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component  {

  state = {
    musicArray: [
      {
        name: "Bagel Noise 1",
        src: bagelNoise1
      },
      {
        name: "Bagel Noise 2",
        src: bagelNoise2
      },
      {
        name: "Barak",
        src: BuildTrack
      },
      {
        name: "Josh",
        src: AfroTrack
      },
      {
        name: "Yeeeshh",
        src: bagelNoise2
      },
    ]
  }

  render(){
    return (
        <div className="App">
          <h1>Barak and Josh worddd</h1>
          <p>Were gonna play some music</p>
          <div className="app-container">
            <MusicSelect 
              choice={"1"} 
              song={this.state.musicArray}
              musicArray={this.state.musicArray}
            />
          </div>

        </div>
    );
  }

}

export default App;
