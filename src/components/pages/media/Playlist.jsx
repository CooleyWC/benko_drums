import React from 'react'
import SongCard from './SongCard'
import songs from './songs'

const Playlist = () => {
  return (
    <div className='container mx-auto sm:px-40 md:px-40 lg:px-52'>{/* mx-auto: centers container. px-4:adds horizontal padding */}
      <div className=''>Play List</div>
      {/* list of songs */}
      {songs.map(songObj => {
        return (
          <div className='pb-1' key={songObj.song}>
            <SongCard song={songObj} />
          </div>
        )
      })}
    </div>
  )
}

export default Playlist
