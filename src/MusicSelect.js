import React, { Component } from 'react';
import PlayButton from './Button'

class MusicSelect extends Component {

    state={
        song: ""
    }

    onChange(){

    }

    render() {
        return (
            <div className="song-select-div">
                <input className="input-song" name="song" placeholder="Select Song" value={this.state.song}></input>
                <h3>{`Select Sound ${this.props.choice}`}</h3>
                {
                    this.props.musicArray.map((musicObj)=>{
                        return(
                            <div>{musicObj.name}</div>
                            )
                        }
                    )
                }
                <div className="music-play-box">
                    <img style={{ height: 45, width: 45}} src="https://i.redd.it/1fmq843ih1o51.png"></img>

                </div>
            </div>
        );
    }
}

export default MusicSelect;