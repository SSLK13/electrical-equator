import type { Song } from "../types/song"

import '../styles/album.css'

export default function (props: Props) {

    return (
        <div className="Album-container">
            <img className="Album-img" src={props.song.image.url} alt="" />
            <h1 className="Album-title">{props.song.album}</h1>
        </div>
    )

}

interface Props {
    song: Song
}