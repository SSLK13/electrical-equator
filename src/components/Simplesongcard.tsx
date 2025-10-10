import type { Song } from "../types/song"
import '../styles/Simplesongcard.css'


export default function (props: Props) {

    function ClickHandler() {
        alert(props.song.title)
    }
    return (
        <div className="Main-container" onClick={ClickHandler}>
            <img src={props.song.image.url} alt=""/>
            <div>
                <div>
                    <div className="Title">
                        <h1>{props.song.title}</h1>
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