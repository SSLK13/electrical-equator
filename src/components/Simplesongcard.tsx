import type { Song } from "../types/song"
import '../styles/Simplesongcard.css'
import { useSong } from "../store"



export default function (props: Props) {
    const {updateSong} = useSong()

    function clickHandler () {
        updateSong(props.song)
    }

    return (
        <div onClick={clickHandler} style={{display: 'flex', gap: '10px'}} className="Card">
            <img src={props.song.image.url} alt="" style={{height:'64px', paddingLeft:'10px', padding: '5px 10px'}}/>
            <div>
                <div>
                    <div className="Title">
                        <h1 style={{fontSize: '18px'}}>{props.song.title}</h1>
                        <p>{props.song.author}</p>
                    </div>
                </div>
            </div>

        </div>
    )

}

interface Props {
    song: Song
}