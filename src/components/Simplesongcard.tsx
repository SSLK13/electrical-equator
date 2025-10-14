import type { Song } from "../types/song"
import '../styles/Simplesongcard.css'


export default function (props: Props) {

    function ClickHandler() {
        alert(props.song.title)
    }
    return (
        <div onClick={ClickHandler} style={{display: 'flex', gap: '10px'}} className="Card">
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