import React, { useState, useRef } from 'react'
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";
const SongCard = ({ song, handleSelectedSong }) => {
  const { song: title, artist, image, audio: track } = song

  const [isPlaying, setIsPlaying] = useState(true)
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
  return (
    <div className='flex border border-gray-400' onClick={() => handleSelectedSong(song)}>
      <audio
        ref={audio}
        src={track}
        preload='metadata'

        //onLoadedMetadata handles calculating the time duration
        onLoadedMetadata={handleLoadedMetaData}
        //onTimeUpdate updates the time as the song is playing
        onTimeUpdate={updateCurrentTime}
      ></audio>
      <img className='' width={70} height={70} src={image} />
      <div className='flex'>
        {/**play & pause */}
        <div>
          <button onClick={playPause}> {isPlaying ? <TbPlayerPlay /> : <TbPlayerPause />} </button>
        </div>


      </div>
      <div className='flex flex-col pl-1'>
        <span>{title}</span>
        <span>{artist}</span>
      </div>
    </div>
  )

}

export default SongCard
