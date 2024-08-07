import React from 'react';
import ImgCarousel from './ImgCarousel'

function Home() {
    return (
        <>
        
        <div style={{display: 'flex', justifyContent: 'center', margin: '100px'}}>
            <h1>Tom Benko Drums</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <ImgCarousel />
        </div>
   
        </>
    );
}

export default Home;