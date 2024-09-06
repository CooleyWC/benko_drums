import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    return (
       <>
       <header className="bg-[#161a1d] sm:flex sm:justify-between sm:items-center sm:p-4">
            <section className="flex justify-between p-4 sm:p-0 items-center">
                <div>
                    <NavLink to='/' onClick={handleCloseMenu} className='text-3xl text-[#f5f3f4] hover:animate-pulse'>Tom Benko</NavLink>
                </div>
                <div className='sm:hidden'>
                    <button 
                        type='button' 
                        onClick={()=>setIsOpen(!isOpen)} 
                        className={`text-3xl focus:outline-none transform transition-transform duration-300 active:scale-150 ${isOpen ? 'text-white': 'text-gray-300 '} hover:text-white`}
                    >
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </section>
                <div className={`${isOpen ? 'block px-2 pt-2 pb-4': 'hidden'} sm:flex sm:p-0`}>
                    <NavLink 
                        to='/about' 
                        onClick={handleCloseMenu} 
                        className='block px-4 py-1 text-[#f5f3f4] font-sans hover:text-[#e5383b] transition-colors ease-in-out'
                    >
                        ABOUT
                    </NavLink>
                    <NavLink 
                        to='/compositions' 
                        onClick={handleCloseMenu} 
                        className='block px-4 py-1 text-[#f5f3f4] font-sans hover:text-[#e5383b] transition-colors ease-in-out'
                    >
                            COMPOSITIONS
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        onClick={handleCloseMenu} 
                        className='block px-4 py-1 text-[#f5f3f4] font-sans hover:text-[#e5383b] transition-colors ease-in-out'
                    >
                        CONTACT
                    </NavLink>
            </div>
        </header>
       </>
    );
}

export default NavBar;


// https://coolors.co/palette/0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff