import '../styles/Playlisttop.css'

import type { Song } from "../types/song"

export default function (props: Props) {

    return (
        <div className="Playlist-cont">
            <div className="Current-song">
                <h1 style={{paddingLeft: '10px', paddingTop: '10px'}} >Sonando...</h1>
                <div style={{display: 'flex'}}>
                    <div>
                        <img src={props.song.image.url} alt=""  style={{height: '80px', paddingLeft: '10px',}}/>
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <h1 style={{fontSize: '22px'}}>{props.song.title}</h1>
                        <p>{props.song.author}</p>
                    </div>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

interface Props {
    song: Song
}