import '../styles/Footer.css'

import {useSong} from '../store'

import { FaUserCircle } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import { BiShuffle } from 'react-icons/bi';
import { BiDownload } from 'react-icons/bi';
import { BiSolidVolumeFull } from 'react-icons/bi';

export default function () {
    const {song} = useSong()

    return (
        <div className="Footer-container">
            <div className="User-cont">
                <img src={song?.image.url} alt="" style={{
                                                        height: '64px',
                                                        padding: '10px',
                                                        borderRadius: '20px'
                                                        }} />
                <p>{song?.title}</p>
            </div>

            <div className="Control-cont">
                <div className="Panel">
                    <audio src={song?.audio.url} controls></audio>
                    <button> <BiDownload style={{fontSize: '18px', color: 'white'}}/> </button>
                    <button> <BiSkipPrevious style={{fontSize: '32px', color: 'white'}}/> </button>
                    <button> <FaPlay style={{fontSize: '22px', color: 'white'}} /> </button>
                    <button> <BiSkipNext style={{fontSize: '32px', color: 'white'}} /> </button>
                    <button> <BiShuffle style={{fontSize: '18px', color: 'white'}} /> </button>
                </div>
                <div>
                    <progress></progress>
                </div>
            </div>

            <div className="Volume">
                <progress></progress>
                <button> <BiSolidVolumeFull style={{fontSize: '18px', color: 'white'}} /> </button>
            </div>
        </div>
    )
}