import React, { Component } from 'react';

class Button extends Component {

    state = {
        play: false,
    }

    audio = new Audio

    clickButton(e){
        if (this.state.play === true){
          this.setState({
            play: false
          })
          this.audio.src = ""
          this.audio.pause()
        } else if (this.state.play === false){
          this.setState({
            play: true
          })
          this.audio.src = this.props.song.src
          this.audio.play()
        }
    }

    render() {
        return (
            <div className="song-div">
                { 
                    this.props.song.name === "Josh" ? 
                    <img style={{ height: 45, width: 45}} src="https://i.redd.it/1fmq843ih1o51.png"></img> 
                    : 
                    <img style={{ height: 45, width: 45}} src="https://cdn1.iconfinder.com/data/icons/mixed-long-shadow-1/512/headphones-512.png"></img>
                }
                <p>{this.props.song.name}</p>
                <button onClick={()=>this.clickButton()}>Play</button>
            </div>
        );
    }
}

export default Button;