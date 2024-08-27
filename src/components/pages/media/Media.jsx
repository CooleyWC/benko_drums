import React, { useState, useRef } from 'react';
import SongCard from './SongCard'
import songs from './songs'
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";
import ambientMusic from '../../../assets/audio/inslowmotion.mp3'

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

function Media() {
  const [isPlay, setIsPlay] = useState(false)
  const [duration, setDuration] = useState('')
  const [timeCounter, setTimeCounter] = useState(0)
  const audio = useRef()

  const handleLoadedMetaData = () => {
    setDuration(calculateTime(audio.current.duration))
  }
  const updateCurrentTime = (e) => {
    setTimeCounter(Math.floor(e.target.currentTime))
    //displays the time next to range input
    const currentTime = calculateTime(audio.current.duration - Math.floor(e.target.currentTime))
    setDuration(currentTime)
  }
  return (
    <div className='container mx-auto sm:px-40 md:px-40 lg:px-52'>{/* mx-auto: centers container. px-4:adds horizontal padding */}
      <audio
        ref={audio}
        src={ambientMusic}
        preload='metadata'
        loop
        //onLoadedMetadata will handle calculating the time duration
        onLoadedMetadata={handleLoadedMetaData}
        //onTimeUpdate will update the time as the song is playing
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
            <button onClick={() => setIsPlay(!isPlay)}> {isPlay ? <TbPlayerPause /> : <TbPlayerPlay />} </button>
          </div>

          {/**Go Forward */}
          <div>
            <button><TbPlayerSkipForward /></button>
          </div>
          <input
            type="range"
            defaultValue={timeCounter}
          />

        </div>

        {/* Playlist */}
        {songs.map(songObj => {
          return (
            <div className='pb-1' key={songObj.song}>
              <SongCard song={songObj} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Media;