import React from 'react';
import ImgCarousel from './ImgCarousel'

function Home() {
    return (
        <>
        <div className='bg-[#0B090A] min-h-screen'>
            <div className='flex justify-center p-10'>
                <h1 className='text-5xl text-[#f5f3f4] font-sans'>Tom Benko Drums</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ImgCarousel />
            </div>
        </div>
        </>
    );
}

export default Home;