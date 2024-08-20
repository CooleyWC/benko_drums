import React from 'react';
import SongCard from './SongCard'
import guitar from '../../../assets/audio/guitar.mp3'
import inslowmotion from '../../../assets/audio/inslowmotion.mp3'
import tomeetthesun from '../../../assets/audio/tomeetthesun.mp3'
const songs = [
  {
    song: 'Guitar',
    artist: 'Mo Mo',
    image: 'https://images.unsplash.com/photo-1513277179122-48cc37a9cd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNhdHN8ZW58MHx8MHx8fDA%3D',
    audio: guitar
  },
  {
    song: 'In Slow Motion Inspiring Ambient Lounge',
    artist: 'One Identifier',
    image: 'https://images.unsplash.com/photo-1513277179122-48cc37a9cd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNhdHN8ZW58MHx8MHx8fDA%3D',
    audio: inslowmotion
  },
  {
    song: 'To Meet the Sun',
    artist: '42 Nights',
    image: 'https://images.unsplash.com/photo-1513277179122-48cc37a9cd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNhdHN8ZW58MHx8MHx8fDA%3D',
    audio: tomeetthesun
  }
]
function Media() {
  return (
    <div>
      {/* Play List container */}
      <div className='container mx-auto sm:px-40 md:px-40 lg:px-52'>{/* mx-auto: centers container. px-4P:adds horizontal padding */}
        <div className='text-green-400'>Play List</div>
        {/* list of songs */}
        {songs.map(songObj => <SongCard key={songObj.song} song={songObj} />)}

      </div>
    </div>
  );
}

export default Media;