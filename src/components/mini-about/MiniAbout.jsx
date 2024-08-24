import React from 'react';
import { useNavigate } from 'react-router-dom';

function MiniAbout() {

    let navigate = useNavigate()

    return (
        <>
        <div className='bg-[#F5F3F4] max-w-[1400px] m-auto flex flex-col items-center py-7'>
            <h1 className='text-3xl text-center p-3'>About Tom</h1>
            <p className='px-9 py-4'>Tom Benko resides in Chicago working as a drummer, composer, educator and curator. Tom performs with Blue Man Group Chicago at the Briar Street Theater as one of their drummers and is the Briar Street Theater Drum School Teacher helping develop new Blue Man specifically with their drumming abilities. As a freelancer, Tom holds down the drum chair for Kevin Presbrey, Greg Hyde, Sam Rae, and Taylor Rodgers and curates a bi-montly music series, Emanation, focused on diversity and eclecticism of Chicago's music scene. As a composer and clinician, Tom tours as a soloist performing original works for electro-acoustic drum kit and built percussion. </p> 
            <button className='bg-[#A4161A] hover:bg-[#660708] transition ease-in-out delay-150 text-white py-2 px-4 rounded mb-2 transform hover:scale-105' onClick={()=>navigate('/about')}>Learn More</button>
        </div>
        </>
    );
}

export default MiniAbout;