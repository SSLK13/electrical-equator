import type { Song } from "../types/song"

import '../styles/Songcard.css'

import { FaPlay } from 'react-icons/fa6';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import { BiShuffle } from 'react-icons/bi';
import { BiDownload } from 'react-icons/bi';
import { BiHeart } from 'react-icons/bi';
import { BiSolidHeart } from 'react-icons/bi';
import { BiShareAlt } from 'react-icons/bi';

export default function (props: Props) {

    return (
        <div className="Main-container">
            
            
            <img src={props.song.image.url} alt="" 
                style={
                        {height:'90%',
                        width:'auto',
                        objectFit: 'cover',
                        paddingLeft: '10px',
                        paddingTop: '10px',
                        borderRadius: '20px'}
                        } />
            

            <div className="Second-cont">
                <div className="Third-cont">
                    <div className="Song-title" style={{paddingLeft: '10px'}}>
                        <h1 style={{fontSize: 'clamp(16px, 5vw, 40px)'}}>{props.song.title}</h1>
                        <p style={{fontSize: 'clamp(14px, 1vw, 40px)'}} >{props.song.author}</p>
                    </div>

                    <div className="Card-panel">
                        <button> <BiDownload style={{fontSize: '14px', color: 'white'}}/> </button>
                        <button> <BiSkipPrevious style={{fontSize: '28px', color: 'white'}}/> </button>
                        <button> <FaPlay style={{fontSize: '18px', color: 'white'}} /> </button>
                        <button> <BiSkipNext style={{fontSize: '28px', color: 'white'}} /> </button>
                        <button> <BiShuffle style={{fontSize: '14px', color: 'white'}} /> </button>
                    </div>
                </div>

                <div className="Social-buttons">
                    <button> <BiHeart style={{fontSize: '24px', color: 'white', paddingTop: '10px'}} /> </button>
                    <button> <BiShareAlt style={{fontSize: '22px', color: 'white', paddingBottom: '10px'}} /> </button>
                </div>
            </div>

        </div>
    )

}

interface Props {
    song: Song
}