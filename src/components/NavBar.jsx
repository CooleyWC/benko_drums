import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";



function NavBar() {

    const [isOpen, setIsOpen] = useState(false);


    

    return (
       <>
       <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:p-4">
            <section className="flex justify-between p-4 sm:p-0 items-center">
            <div>
                <h1 className="text-3xl text-gray-300">Tom Benko</h1>
            </div>
            <div className='sm:hidden'>
                <button type='button' onClick={()=>setIsOpen(!isOpen)} className={`text-3xl focus:outline-none transform transition-transform duration-300 active:scale-150 ${isOpen ? 'text-white': 'text-gray-300 '} hover:text-white`}>
                    &#9776;
                </button>
            </div>
            </section>
            <div className={`${isOpen ? 'block px-2 pt-2 pb-4': 'hidden'} sm:flex sm:p-0`}>
                <a href="#" className='block px-2 py-1 text-white font-semibold hover:bg-gray-800'>About</a>
                <a href="#" className='mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2'>Media</a>
                <a href="#" className='mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2'>Compositions</a>
                <a href="#" className='mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2'>Contact</a>
            </div>
         
        </header>
       </>
    );
}

export default NavBar;
