import type { Song } from "../types/song"


export default function (props: Props) {

    
    return (
        <div className="Main-container">
            <img src={props.song.image.url} alt="" />
            <div>
                <div>
                    <div className="Title">
                        <h1>{props.song.title}</h1>
                        <p>{props.song.author}</p>
                    </div>

                    <div className="Card-panel">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>

                <div className="Social-buttons">
                    <button></button>
                    <button></button>
                </div>
            </div>

        </div>
    )

}

interface Props {
    song: Song
}