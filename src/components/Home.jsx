import React from 'react';
import ImgCarousel from './ImgCarousel';
import { useNavigate } from 'react-router-dom';

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
            <div className='bg-[#D3D3D3] max-w-[1400px] m-auto'>
                <article className='flex flex-col'>
                    <h1 className='text-3xl text-center p-3'>About Tom</h1>
                    <p className='px-7 py-4'>Tom Benko resides in Chicago working as a drummer, composer, educator and curator. Tom performs with Blue Man Group Chicago at the Briar Street Theater as one of their drummers and is the Briar Street Theater Drum School Teacher helping develop new Blue Man specifically with their drumming abilities. As a freelancer, Tom holds down the drum chair for Kevin Presbrey, Greg Hyde, Sam Rae, and Taylor Rodgers and curates a bi-montly music series, Emanation, focused on diversity and eclecticism of Chicago’s music scene. As a composer and clinician, Tom tours as a soloist performing original works for electro-acoustic drum kit and built percussion. </p>
                </article>
                {/* add a transition effect to the button */}
                <button className='bg-[#A4161A] hover:bg-[#E5383B] text-white py-2 px-4 rounded ' onClick={()=>navigate('/about')}>Learn More</button>
            </div>
        </div>
        </>
    );
}

export default Home;