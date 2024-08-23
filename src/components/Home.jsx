import React from 'react';
import ImgCarousel from './ImgCarousel';
import { useNavigate } from 'react-router-dom';
import {BriefcaseIcon} from '@heroicons/react/24/outline'
import {MusicalNoteIcon} from '@heroicons/react/24/outline'
import {AcademicCapIcon} from '@heroicons/react/24/outline'
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaBandcamp } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

function Home() {

    let navigate = useNavigate()

    return (
        <>
        <div className='bg-[#0B090A] min-h-screen'>
            <div className='flex-col text-center justify-center p-10'>
                <h1 className='text-6xl text-[#f5f3f4] font-sans pb-3'>Tom Benko</h1>
                <p className='text-lg text-[#f5f3f4] font-sans'>Percussionist | Composer | Educator | Curator</p>
            </div>
            <div className='flex justify-center'>
                <ImgCarousel />
            </div>
            {/* mini about */}
            <div className='bg-[#D3D3D3] max-w-[1400px] m-auto flex flex-col items-center'>
                <h1 className='text-3xl text-center p-3'>About Tom</h1>
                <p className='px-7 py-4'>Tom Benko resides in Chicago working as a drummer, composer, educator and curator. Tom performs with Blue Man Group Chicago at the Briar Street Theater as one of their drummers and is the Briar Street Theater Drum School Teacher helping develop new Blue Man specifically with their drumming abilities. As a freelancer, Tom holds down the drum chair for KevinPresbrey, Greg Hyde, Sam Rae, and Taylor Rodgers and curates a bi-montly music series, Emanation, focused on diversity and eclecticism of Chicago’s music scene. As a composer and clinician, Tomtours as a soloist performing original works for electro-acoustic drum kit and built percussion. </p> 
                <button className='bg-[#A4161A] hover:bg-[#660708] transition ease-in-out delay-150 text-white py-2 px-4 rounded mb-2' onClick={()=>navigate('/about')}>Learn More</button>
            </div>
            {/* career list */}
            <div className='max-w-[1400px] m-auto grid grid-cols-1 md:grid-cols-3 place-items-center'>
                <div className='col-span-1 text-[#f5f3f4] flex flex-col items-center mb-8'>
                    <BriefcaseIcon className='size-14 text-[#e5383b] mt-10 mb-3 transition delay-150 hover:text-gray-500 ease-in-out'/>
                    <h1 className='mb-2 text-2xl'>Business Owner</h1>
                    <p className='text-center px-2 pb-5'>Tom is the owner of <strong>The Rhythm Messengers</strong> - Chicago-based Drumming and Entertainment company.</p>
                    <a href='https://www.rhythmmessengers.com'><button className='text-white border-2 transition ease-in-out delay-150 hover:text-[#e5383b] py-2 px-4 rounded transform hover:scale-105 hover:border-3 hover:border-[#e5383b]'>Visit the Rhythm Messengers Website</button></a>
                </div>
                <div className='col-span-1 text-[#f5f3f4] flex flex-col items-center mb-5'>
                    <MusicalNoteIcon className='size-14 text-[#e5383b] mt-1 mb-2 transition delay-150 hover:text-gray-500 ease-in-out'/>
                    <h1 className='mb-2 text-2xl'>Drummer | Composer</h1>
                    <p className='text-center px-2 pb-5'>Tom plays drums in the Blue Man Group Chicago.</p>
                    <a><button onClick={()=>navigate('/media')} className='text-white border-2 transition ease-in-out delay-150 hover:text-[#e5383b] py-2 px-4 rounded transform hover:scale-105 hover:border-3 hover:border-[#e5383b]'>Check Out Tom's Drumming</button></a>
                </div>
                <div className='col-span-1 text-[#f5f3f4] flex flex-col items-center mb-5'>
                    <AcademicCapIcon className='size-14 text-[#e5383b] mt-7 mb-2 transition delay-150 hover:text-gray-500 ease-in-out'/>
                    <h1 className='mb-2 text-2xl'>Educator</h1>
                    <p className='text-center px-2 pb-5'>Tom is the Percussion Director at Highland Park High School, and New Trier High School.</p>
                    <a><button onClick={()=>navigate('/contact')} className='text-white border-2 transition ease-in-out delay-150 hover:text-[#e5383b] py-2 px-4 rounded transform hover:scale-105 hover:border-3 hover:border-[#e5383b]'>Contact Tom for Clinic Info</button></a>
                </div>
            </div>
            {/* footer */}
            <div className='max-w-[1400px] flex-col text-center bg-[#F5F3F4]'>
                {/* <h1 className='col-span-1 px-4 my-3'>Tom is a proud endorser of Innovative Percussion.<span><img className='object-contain h-20 w-20' src='https://www.innovativepercussion.com/images/IP_Letters_white_fb.jpg' alt='innovative percussion'></img></span></h1> */}
                <h1 className='text-3xl pt-4 pb-2'>Let's Talk Beats!</h1>
                <a href='mailto:tabdrums@gmail.com'>
                    <button className='mb-4 text-lg transition ease-in-out hover:text-[#A4161A]'>tabdrums@gmail.com</button>
                </a>
                <div className='flex justify-center pb-5 border-b-2 border-slate-400'>
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
                <div className='my-2'>
                    <p className='font-sans text-sm text-gray-700'>Copyright © 2024. Tom Benko Drums. All Rights Reserved. Designed by Rojas-Cooley Devs</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;