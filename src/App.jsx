import ImageCarousel from './ImageCarousel'


function App() {


  return (
    <>
      <div style={{
        maxWidth:'1200px', 
        width:'100%', 
        // try aspect ratio instead of height
        height: '500', 
        margin: '0 auto'}}>
        <ImageCarousel />
      </div>
      
    </>
  )
}

export default App