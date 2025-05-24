import Logo from "../../assets/Logo.svg";
import Location from '../../assets/Location.png';
import Message from '../../assets/Message.png';
import Calling from '../../assets/Calling.png';
import './Middle.css';
import { Link } from 'react-router-dom';

function Middle() {
    return (
        <div className="middle">
            <Link to="/" className="middle-logo">
                <img src={Logo} alt="Logo" className="middle-img" />
            </Link>
            <ul className="middle-list">
                <li className="middle-item">
                    <img src={Location} alt="Location" className="middle-icon" />
                    <div className="middle-item_box">
                        <p className="middle-text">70 West Buckingham Ave.</p>
                        <p className="middle-text">Farmingdale, NY 11735</p>
                    </div>
                </li>
                <li className="middle-item">
                    <img src={Message} alt="Email" className="middle-icon" />
                    <div className="middle-item_box">
                        <p className="middle-text">contact@greenshop.com</p>
                    </div>
                </li>
                <li className="middle-item">
                    <img src={Calling} alt="Phone" className="middle-icon" />
                    <div className="middle-item_box">
                        <p className="middle-text">+88 01911 717 490</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Middle;
