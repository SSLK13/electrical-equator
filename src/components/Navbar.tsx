import "../styles/Navbar.css"
import { AiOutlineMenu } from 'react-icons/ai';
import { IoOptionsOutline } from 'react-icons/io5';
import { MdModeNight } from 'react-icons/md';

export default function () {

    return (
        <div className="Navbar-container">
            <button className="Menu-btn"> <AiOutlineMenu style={{ fontSize: '24px', color: 'white'}}/> </button>
            <h1 style={{fontSize: '24px'}}>Logo</h1>
            <div className="Button-cont">
                <button className="Config-btn" ><IoOptionsOutline style={{fontSize: '24px', color: 'white'}} /> </button>
                <button className="Config-btn" ><MdModeNight style={{fontSize: '24px', color: 'white'}} /> </button>
            </div>
                
        </div>
        
    )

}
