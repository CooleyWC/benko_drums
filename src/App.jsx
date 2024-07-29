import ImageCarousel from './ImageCarousel'
import dashboard from './assets/images/dashboard.png'
import faculty from './assets/images/faculty.png'
import instructor from './assets/images/instructor.png'
import landing_page from './assets/images/landing_page.png'
import lesson_form from './assets/images/lesson_form.png'

const images = [dashboard, faculty, instructor, landing_page, lesson_form]


function App() {


  return (
    <>
      <div style={{
        maxWidth:'1200px', 
        width:'100%', 
        // try aspect ratio instead of height
        height: '500', 
        margin: '0 auto'}}>
        <ImageCarousel images={images}/>
      </div>
      
    </>
  )
}

export default App