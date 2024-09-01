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
  return (
    <div className='flex border border-gray-400' onClick={() => handleSelectedSong(song)}>
      <audio
        ref={audio}
        src={track}
        preload='metadata'
      ></audio>
      <div className={`flex p-1 bg-[url('${image}')] bg-cover bg-contain`}>
        {/**play & pause */}
        <div className='border-2 border-white rounded-2xl pt-[3px]  text-center h-8 w-8'>
          <button className='text-white' onClick={playPause}> {isPlaying ? <TbPlayerPlay /> : <TbPlayerPause />} </button>
        </div>

      </div>
      <div className='flex justify-between pl-1 w-full'>
        <div className='flex flex-col'>
          <span className=''>{title}</span>
          <span className='text-xs'>by {artist}</span>
        </div>
        <div className='flex justify-end pt-1 '>
          <div className='pr-2'>
            <button>Buy</button>
          </div>
          <div className='pr-2'>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongCard
