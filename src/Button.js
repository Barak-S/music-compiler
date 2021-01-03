import React, { Component } from 'react';

class Button extends Component {

    state = {
        play: false,
    }

    audio = new Audio

    clickButton(e){
        this.state.play ? 
            this.pauseMusic()
        : 
            this.playMusic()
    }

    playMusic(){
        this.setState({
            play: true
          })
        this.audio.src = this.props.song.src
        this.audio.play()
    }

    pauseMusic(){
        this.setState({
            play: false
        })
        this.audio.src = ""
        this.audio.pause()
    }

    render() {
        return (
            <div className="song-div">
                <p style={{color: "#333"}}>{this.props.song.name}</p>
                {/* <img style={{ height: 45, width: 45}} src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/12-512.png" onClick={()=>this.clickButton()}></img> */}
                <img style={{ height: 45, width: 45}} src={!this.state.play ? "https://uxwing.com/wp-content/themes/uxwing/download/09-controller-and-music/red-play-button.png" : "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/12-512.png" } onClick={()=>this.clickButton()}></img>
            </div>
        );
    }
}

export default Button;