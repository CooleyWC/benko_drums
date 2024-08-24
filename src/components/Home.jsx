import React from 'react';
import MiniAbout from './mini-about/MiniAbout';
import CareerList from './career-list/CareerList';
import ImgCarousel from './ImgCarousel';
import Footer from './footer/Footer';

function Home() {
    return (
        <>
        <div className='bg-[#0B090A] min-h-screen'>
            <div className='flex-col text-center justify-center p-10'>
                <h1 className='text-6xl text-[#f5f3f4] font-sans pt-5 pb-2'>Tom Benko</h1>
                <p className='text-lg text-[#f5f3f4] font-sans'>Percussionist | Composer | Educator | Curator</p>
            </div>
            <div className='flex justify-center'>
                <ImgCarousel />
            </div>
            <MiniAbout />
            <CareerList />
            <Footer />
        </div>
        </>
    );
}

export default Home;