import React, { useState, useRef, useEffect } from 'react';
import SongCard from './SongCard'
import songs from './songs'
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";
import ambientMusic from '../../../assets/audio/inslowmotion.mp3'
import guitar from '../../../assets/audio/guitar.mp3'

// import '../media/audio.css'

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

function Media() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState('')
  const [timeCounter, setTimeCounter] = useState(0)
  //Replace value with first song on the list when it's time to use the real audio
  const [selectedSong, setSelectedSong] = useState(guitar)
  const audio = useRef()

  const playPause = () => {
    if (isPlaying) {
      audio.current.play()
      setIsPlaying(false)
    } else {
      audio.current.pause()
      setIsPlaying(true)
    }
  }
  const handleLoadedMetaData = () => {
    setDuration(calculateTime(audio.current.duration))
  }

  const updateCurrentTime = (e) => {
    setTimeCounter(Math.floor(e.target.currentTime))
    //displays the time next to range input
    const currentTime = calculateTime(audio.current.duration - Math.floor(e.target.currentTime))
    setDuration(currentTime)
  }

  const handleSelectedSong = (song) => {
    setSelectedSong(song)
  }

  return (
    <div className='container mx-auto sm:px-40 md:px-40 lg:px-52'>{/* mx-auto: centers container. px-4:adds horizontal padding */}
      <audio
        ref={audio}
        src={selectedSong}
        preload='metadata'

        //onLoadedMetadata handles calculating the time duration
        onLoadedMetadata={handleLoadedMetaData}
        //onTimeUpdate updates the time as the song is playing
        onTimeUpdate={updateCurrentTime}
      ></audio>
      <div>
        {/**Audio Player */}
        <div className='flex'>
          {/**Go back */}
          <div>
            <button><TbPlayerSkipBack /></button>
          </div>

          {/**play & pause */}
          <div>
            <button onClick={playPause}> {isPlaying ? <TbPlayerPlay /> : <TbPlayerPause />} </button>
          </div>

          {/**Go Forward */}
          <div>
            <button><TbPlayerSkipForward /></button>
          </div>
          <div>
            <input
              type="range"
              value={timeCounter}
              readOnly
            />
          </div>

          <div>{duration}</div>
        </div>

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