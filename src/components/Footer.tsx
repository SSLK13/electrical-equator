import '../styles/Footer.css'
import { FaUserCircle } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import { BiShuffle } from 'react-icons/bi';
import { BiDownload } from 'react-icons/bi';
import { BiSolidVolumeFull } from 'react-icons/bi';

export default function () {

    return (
        <div className="Footer-container">
            <div className="User-cont">
                <button><FaUserCircle style={{fontSize: '32px', color: 'white'}} /></button>
                <p>UserName</p>
            </div>

            <div className="Control-cont">
                <div className="Panel">
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