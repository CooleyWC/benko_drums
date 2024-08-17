import React from 'react';
import ImgCarousel from './ImgCarousel'

function Home() {
    return (
        <>
        <div className='bg-slate-600 min-h-screen'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className='text-3xl font-bold'>Tom Benko Drums</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ImgCarousel />
            </div>
        </div>
        </>
    );
}

export default Home;