import React, { useState, useRef, useEffect } from 'react';
import SongCard from './SongCard'
import songs from './songs'
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";

import guitar from '../../../assets/audio/guitar.mp3'

// import '../media/audio.css'

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

function Media() {
  const handleSelectedSong = (song) => {
    //When a song is clicked the song info is set to this variable
    setSelectedSongInfo(song)
  }

  return (
    <div className='container mx-auto sm:px-px md:px-10 lg:px-40'>{/* mx-auto: centers container. px-4:adds horizontal padding */}
      <div>
        <h1>Playlist</h1>
        {/* Playlist */}
        {songs.map(songObj => {
          return (
            <div className='pb-1' key={songObj.song}>
              <SongCard song={songObj} handleSelectedSong={handleSelectedSong} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Media;