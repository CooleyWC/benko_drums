import React, { useState, useRef, useEffect } from 'react';
import SongCard from './SongCard'
import songs from './songs'
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";
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
  //Replace selected song value with first song on the list when it's time to use the real audio
  const [selectedSongInfo, setSelectedSongInfo] = useState(songs[0])
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
    setTimeCounter(Math.floor(audio.current.currentTime))
    //displays the time next to range input
    const currentTime = calculateTime(audio.current.duration - Math.floor(e.target.currentTime))
    setDuration(currentTime)
  }

  const handleSelectedAudio = (song) => {
    //When a song is clicked the song info is set to this variable
    setSelectedSongInfo(song)
  }

  const handleBackSkip = () => {
    audio.current.currentTime = 0
  }

  const handleForwardSkip = () => {

  }

  const handleDoubleBackSkip = () => {
    let index = songs.findIndex(song => song.song === selectedSongInfo.song)

    if (index === 0) {
      setSelectedSongInfo(songs[songs.length - 1])
    } else {
      setSelectedSongInfo(songs[index - 1])
    }

    audio.current.currentTime = 0
    setIsPlaying(true)
  }

  return (
    <div className='container mx-auto sm:px-40 md:px-40 lg:px-52'>{/* mx-auto: centers container. px-4:adds horizontal padding */}

      {/**Audio and Controls */}
      <audio
        ref={audio}
        src={selectedSongInfo.audio}
        preload='metadata'

        //onLoadedMetadata handles calculating the time duration
        onLoadedMetadata={handleLoadedMetaData}
        //onTimeUpdate updates the time as the song is playing
        onTimeUpdate={updateCurrentTime}
      ></audio>
      <div>
        {/**Audio Player */}
        <div className='flex'>
          {/**Back Skip */}
          <div>
            <button onClick={handleBackSkip} onDoubleClick={handleDoubleBackSkip}><TbPlayerSkipBack /></button>
          </div>

          {/**play & pause */}
          <div>
            <button onClick={playPause}> {isPlaying ? <TbPlayerPlay /> : <TbPlayerPause />} </button>
          </div>

          {/**Forward Skip */}
          <div>
            <button onClick={handleForwardSkip}><TbPlayerSkipForward /></button>
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
              <SongCard song={songObj} handleSelectedAudio={handleSelectedAudio} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Media;