import {useState} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './carousel-slider.css'

function ImageCarousel({images}) {

    const [imageIndex, setImageIndex] = useState(0)

    const next = () => {
        setImageIndex(index => {
            if(index === images.length -1){
                return 0
            } else {
                return index + 1
            }
        })
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

            <div style={{width: '100%', height: '100%', display: 'flex', overflow: 'hidden'}}>
                {images.map(imageItem => (
                    <img 
                        key={imageItem}
                        src={imageItem}
                        className='carousel-slider-img'
                        style={{translate: `${-100 * imageIndex}%`}}
                    />
                ))}
            </div>


            {/* <img src={images[imageIndex]} className='carousel-slider-img'/> */}
            
            <button onClick={prev} className='carousel-slider-btn' style={{left: 0}}>
                <ChevronLeftIcon />
            </button>
            <button onClick={next} className='carousel-slider-btn' style={{right: 0}}>
                <ChevronRightIcon />
            </button>
        </div>
        </>
    );
}

export default ImageCarousel;