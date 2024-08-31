import React from 'react'

const SongCard = ({ song, handleSelectedAudio }) => {
  const { song: title, artist, image } = song
  return (
    <div className='flex border border-gray-400' onClick={() => handleSelectedAudio(song)}>
      <img className='' width={70} height={70} src={image} />
      <div className='flex flex-col pl-1'>
        <span>{title}</span>
        <span>{artist}</span>
      </div>
    </div>
  )

}

export default SongCard
