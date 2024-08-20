import {useState, useEffect} from 'react';
import {images} from './ImageData'


function ImgCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null

    useEffect(()=>{
        timeOut = autoPlay && setTimeout(()=>{
            handleNext();
        }, 8000)
    }, )

    const handleNext = () => {
        setCurrentIndex(currentIndex === images.length-1 ? 0 : currentIndex +1)
    }

    return (
        // carousel
        <div className='max-w-[1400px] h-[600px] w-full m-auto py-16 px-4'
            onMouseEnter={()=>{
                setAutoPlay(false)
                clearInterval(timeOut)
            }} 
            onMouseLeave={()=>{setAutoPlay(true)}}>
                {/* carousel wrapper */}
            <div className='w-full h-full relative'>
                {images.map((image, index)=>{
                return (
                    // carousel card
                    <div key={index} className={`flex flex-1 absolute w-full h-full overflow-hidden transform transition-transform duration-1000 ease-in-out
                        ${index===currentIndex ? 'opacity-100 scale-100 pointer-events-auto': 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                        <img className='w-full object-cover' src={image.image} alt=''/>
                    </div>
                    )
                })}
                {/* dot buttons wrapper */}
                <div className='absolute top-[104%] left-1/2 transform -translate-x-1/2'>
                    {images.map((_, index)=>{
                        return (
                            // dot buttons
                            <div key={index} 
                                className={`h-[10px] w-[10px] bg-[#D3D3D3] rounded-full inline-block ml-[10px] cursor-pointer transform transition-transform duration-300 
                                    ${index===currentIndex ? 'bg-[#E5383B] scale-110' : ''}`}
                                onClick={()=>setCurrentIndex(index)}
                            ></div>
                        )
                    })}
                </div>
           </div>
        </div>    
    )
}

export default ImgCarousel;
