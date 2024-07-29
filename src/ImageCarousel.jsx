import {useState} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './carousel-slider.css'

function ImageCarousel({images}) {

    const [imageIndex, setImageIndex] = useState(0)

    const next = () => {
        
    }

    const prev = () => {
        setImageIndex(index=> {
            if(index===0){
                return images.length-1
            } else {
                return index-1
            }
        })
    }

    return (
        <>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <img src={images[imageIndex]} className='carousel-slider-img'/>
        </div>
            <button onClick={prev} className='carousel-slider-btn' style={{left: 0}}>
          <ChevronLeftIcon />
          </button>
          <button onClick={next} className='carousel-slider-btn' style={{right: 0}}>
          <ChevronRightIcon />
          </button>
        </>
    );
}

export default ImageCarousel;