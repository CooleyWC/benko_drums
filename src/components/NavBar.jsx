import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";
import '../styles/navbar-styles.css'


function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const closeMenuOnMobile = () => {
        if(window.innerWidth <= 1500) {
            setShowMenu(false);
        }
    }

    return (
        <header className='header'>
            <nav className='nav'>
                <NavLink to='/' className='site_title'>
                    Tom Benko
                </NavLink>

                <div
                    className={`nav__menu ${showMenu ? 'show-menu': ''}`}
                    id='nav_menu'
                >
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <NavLink to='/about' className='nav__link' onClick={closeMenuOnMobile}>
                                About
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/media' className='nav__link' onClick={closeMenuOnMobile}>
                                Media
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/compositions' className='nav__link' onClick={closeMenuOnMobile}>
                                Compositions
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='/contact' className='nav__link' onClick={closeMenuOnMobile}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className='nav__close' id='nav-close' onClick={toggleMenu}>
                        <IoClose />

                    </div>
                </div>
                <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
                    <IoMenu />
                </div>

            </nav>
        </header>
    );
}

export default NavBar;
