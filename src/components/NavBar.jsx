import React from 'react';
import '../styles/navbar-styles.css'


function NavBar() {
    return (
        <nav className='nav'>
            <a href='/' className='site_title'>Tom Benko</a>
            <ul>
                <li>
                    <a href='/about'>ABOUT</a>
                </li>
                <li>
                    <a href='/media'>MEDIA</a>
                </li>
                <li>
                    <a href='/compositions'>COMPOSITIONS</a>
                </li>
                <li>
                    <a href='/contact'>CONTACT</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
