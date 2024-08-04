import {useState, useEffect} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../styles/carousel-slider.css'
import {images} from './ImageData'


function ImgCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null

    useEffect(()=>{
        timeOut = autoPlay && setTimeout(()=>{
            handleNextBtn();
        }, 9000)
    }, )

    const handlePrevBtn = () => {
        setCurrentIndex(currentIndex === 0 ? images.length-1 : currentIndex -1)
    }

    const handleNextBtn = () => {
        setCurrentIndex(currentIndex === images.length-1 ? 0 : currentIndex +1)
    }

    return (
        <div className='carousel' 
            onMouseEnter={()=>{
                setAutoPlay(false)
                clearInterval(timeOut)
            }} 
            onMouseLeave={()=>{setAutoPlay(true)}}>
            <div className='carousel_wrapper'>
                {images.map((image, index)=>{
                return (
                    <div key={index} className={index== currentIndex ? 'carousel_card carousel_card-active' : 'carousel_card'}>
                        <img className='card_image' src={image.image} alt=''/>
                    </div>
                    )
                })}
                <div className='prev_btn' onClick={handlePrevBtn}><ChevronLeftIcon/></div>
                <div className='next_btn' onClick={handleNextBtn}><ChevronRightIcon/></div>
                <div className='dot_btns_wrapper'>
                    {images.map((_, index)=>{
                        return (
                            <div key={index} 
                            className={index== currentIndex ? 'dot_btns dot_btns-active' : 'dot_btns'}
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

