import React from 'react';
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaBandcamp } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"


function Footer() {
    return (
        <>
        <div className='m-auto flex-col justify-center text-center bg-[#B1A7A6] pt-4'>
            {/* <h1 className='col-span-1 px-4 my-3'>Tom is a proud endorser of Innovative Percussion.<span><img className='object-contain h-20 w-20' src='https://www.innovativepercussion.com/images/IP_Letters_white_fb.jpg' alt='innovative percussion'></img></span></h1> */}
            <h1 className='text-3xl pt-4 pb-2'>Let's Connect!</h1>
            <a href='mailto:tabdrums@gmail.com'>
                <button className='mb-6 text-lg transition ease-in-out hover:text-[#A4161A]'>tabdrums@gmail.com</button>
            </a>
            <div className='flex justify-center pb-8 border-b-2 border-gray-600'>
                <a href='https://www.facebook.com/tabdrums'>
                    <FaFacebook className='text-5xl mx-2 transition hover:text-[#A4161A] transform ease-in-out duration-150 hover:scale-110'/>
                </a>
                <a href='https://instagram.com/tabdrums'>
                    <FaInstagram className='text-5xl mx-2 transition hover:text-[#A4161A] transform ease-in-out duration-150 hover:scale-110'/>
                </a>
                <a href='https://tombenko.bandcamp.com/'>
                    <FaBandcamp className='text-5xl mx-2 transition hover:text-[#A4161A] transform ease-in-out duration-150 hover:scale-110'/>
                </a>
                <a href='https://www.linkedin.com/in/thomas-benko-3b5aa668'>
                    <FaLinkedin className='text-5xl mx-2 transition hover:text-[#A4161A] transform ease-in-out duration-150 hover:scale-110'/>
                </a>
                <a href='https://www.youtube.com/@thomasbenko2638/videos'>
                    <FaYoutube className='text-5xl mx-2 transition hover:text-[#A4161A] transform ease-in-out duration-150 hover:scale-110'/>
                </a>
            </div>
            <div className='mt-2 pb-2'>
                <p className='font-sans text-sm text-gray-800'>Copyright © 2024. Tom Benko Drums. All Rights Reserved. Designed by Rojas-Cooley Devs</p>
            </div>
        </div>
        </>
    );
}

export default Footer;