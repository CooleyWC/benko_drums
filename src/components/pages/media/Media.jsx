import React from 'react';
import Playlist from './Playlist';
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";

function Media() {
  return (
    <div>
      {/**Media Player */}
      <div>
        {/**Go back */}
        <div>
          <button><TbPlayerSkipBack /></button>
        </div>

        {/**play & pause */}
        <div>
          <button><TbPlayerPause /> <TbPlayerPlay /></button>
        </div>

        {/**Go Forward */}
        <div>
          <button><TbPlayerSkipForward /></button>
        </div>
      </div>
      <Playlist />
    </div>
  );
}

export default Media;