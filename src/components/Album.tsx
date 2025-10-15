import type { Song } from "../types/song"
import { useSong } from "../store"

import '../styles/album.css'


export default function (props: Props) {

    const { song } = useSong()

    return (
        <div className="Album-container">
            <img className="Album-img" src={song?.image.url} alt="" />
            <h1 className="Album-title">{song?.album}</h1>
        </div>
    )

}

interface Props {
    song: Song
}