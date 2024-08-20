import React from 'react';
import guitar from '../../assets/audio/guitar.mp3'

const songs = [
  {
    song: '',
    artist: '',
    image: '',
    audio: ''
  }
]
function Media() {
  return (
    <div>
      {/* Play List */}
      <div className='container mx-auto sm:px-40 md:px-40 lg:px-52'>{/* mx-auto: centers container. px-4P:adds horizontal padding */}
        <div className='text-green-400'>Play List</div>
        {/* list */}
        <div className='flex border border-gray-400 '>

          <img className='' width={70} height={70} src='https://images.unsplash.com/photo-1513277179122-48cc37a9cd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNhdHN8ZW58MHx8MHx8fDA%3D' />

          <div className='flex flex-col pl-1'>
            <span>Lounge Slow Mo</span>
            <span>Rizza</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;