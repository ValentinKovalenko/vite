import {useState} from 'react';
import './Header.scss';
import phone from '../../assets/icon/phone.png';
import location from '../../assets/icon/location.png';
import email from '../../assets/icon/email.png';
import menu from '../../assets/icon/menu.png';
import close from '../../assets/icon/close.png';
import pict from '../../assets/images/pict.png';
import {navigationName} from '../../consts';
import ScrollTo from "react-scroll-into-view";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? 'header-open' : ''}`}>
            <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
                {navigationName.map((name) =>
                    <ScrollTo key={name.id} selector={`${name.name}`}>
                        <ul key={name.id}>
                            <li><a href={name.name}>{name.value}</a></li>
                        </ul>
                    </ScrollTo>
                )}
                {isOpen && <img className='pict' src={pict} alt='pict'/>}
            </nav>
            <div className="icons">
                <img src={phone} alt='phone'/>
                <img src={location} alt='location'/>
                <img src={email} alt='email'/>
            </div>
            <div className="burger" onClick={toggleMenu}>
                {!isOpen ? <img src={menu} alt='menu'/>
                    :
                    <div className='logo'>
                        <div>Giraffe Club</div>
                        <img className='open' onClick={toggleMenu} src={close} alt='close'/>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;