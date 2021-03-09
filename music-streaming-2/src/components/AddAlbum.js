import React, { Component } from 'react'

export default class AddAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album_title: '',
            artist: ''    
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        value={this.state.album_title}
                        onChange={this.handleChange}
                        placeholder='Enter the name of album title'
                    ></input>
                    <input
                        type='text'
                        value={this.state.artist}
                        onChange={this.handleChange}
                        placeholder='Enter the name of artist'
                    ></input>
                    <button type='submit'>Submit</button>
                    </form>    
            </div>
        )
    }
}
