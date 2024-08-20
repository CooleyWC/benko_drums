import React from 'react'

const SongCard = ({ song }) => {
  if (song) {
    const { song: title, artist, image, audio } = song
    return (
      <div className='flex border border-gray-400 '>
        <img className='' width={70} height={70} src={image} />
        <div className='flex flex-col pl-1'>
          <span>{title}</span>
          <span>{artist}</span>
        </div>
      </div>
    )
  } else {
    return <div>Song Prop not defined</div>
  }

}

export default SongCard
