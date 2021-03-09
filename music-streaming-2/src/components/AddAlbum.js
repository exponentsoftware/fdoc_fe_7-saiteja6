import React, { Component } from 'react'
import Button from '@material-ui/core/Button'; 

export default class AddAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album_title: '',
            artist: '',
            cover: []    
        }
        this.handleChange = this.handleChange.bind(this);
    }

    

    handleChange(event){ 
        this.setState({ 
          [event.target.name] : event.target.value 
        }) 
      } 


    handleSubmit(event) {
        event.preventDefault();
        this.setState(state =>({
            id: state.cover + 1,
            artist: state.artist,
            album: state.artist_album,
            cover: state.cover
        }))
    }

    render() {
        return (
            <div>
                <form className='addAlbum-form'>
                    <input
                        type='text'
                        name='album_title'
                        value={this.state.album_title}
                        onChange={this.handleChange}
                        placeholder='Enter the name of album title'
                    ></input>
                    <input
                        type='text'
                        name='aritst'
                        value={this.state.artist}
                        onChange={this.handleChangeArtist}
                        placeholder='Enter the name of artist'
                    ></input>

                    <input 
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }} 
                    /> 
                    <label htmlFor="contained-button-file"> 
                        <Button variant="contained" color="primary" component="span"> 
                        Upload 
                        </Button> 
                    </label> 
                    
                    <button type='submit'>Submit</button>
                    </form>    

                    <p>{this.state.album_title}</p>
                    <p>{this.state.artist}</p>
            </div>
        )
    }
}
