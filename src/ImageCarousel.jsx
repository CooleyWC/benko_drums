import {useState, useEffect} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './carousel-slider.css'
import dashboard from './assets/images/dashboard.png'
import faculty from './assets/images/faculty.png'
import instructor from './assets/images/instructor.png'
import landing_page from './assets/images/landing_page.png'
import lesson_form from './assets/images/lesson_form.png'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const images = [dashboard, faculty, instructor, landing_page, lesson_form]

function ImageCarousel() {

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

    useEffect(()=>{
        let slider = setInterval(()=>{
            setImageIndex(imageIndex + 1)
        }, 9000)
        return ()=> clearInterval(slider)
    }, [imageIndex])

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
            
            <button onClick={prev} className='carousel-slider-btn' style={{left: 0}}>
                <ChevronLeftIcon />
            </button>
            <button onClick={next} className='carousel-slider-btn' style={{right: 0}}>
                <ChevronRightIcon />
            </button>
            <div className='carousel-dot-btn' style={{
                position: 'absolute',
                bottom: '.5rem',
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '.25rem'
            }}>
                {images.map((_, index)=>(
                    <button 
                    key={index} 
                    onClick={()=> setImageIndex(index)}
                    >
                        {index === imageIndex ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon />}
                    </button>
                ))}
            </div>
        </div>
        </>
    );
}

export default ImageCarousel;