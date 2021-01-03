import React, { Component } from 'react';
import PlayButton from './Button'

class MusicSelect extends Component {

    state={
        song1: "",
        song2: ""
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="song-select-div">
                <h3>{`Select Sound ${this.props.choice}`}</h3>
                <input className="input-song" name="song1" placeholder="Select Song 1" value={this.state.song1} onChange={(e)=>this.onChange(e)}></input>
                <input className="input-song" name="song2" placeholder="Select Song 2" value={this.state.song2} onChange={(e)=>this.onChange(e)}></input>
                {
                    this.props.musicArray.map((musicObj)=>{
                        return(
                            // <div>{musicObj.name}</div>
                            <PlayButton song={musicObj}/>
                            )
                        }
                    )
                }
                {/* <div className="music-play-box">
                    <img style={{ height: 45, width: 45}} src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/12-512.png"></img>

                </div> */}
            </div>
        );
    }
}

export default MusicSelect;