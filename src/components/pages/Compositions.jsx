import React from 'react';

function Compositions() {
  return (
    <div className='grid '>
      <div className='text-center'>
        <h1>Compositions</h1>
      </div>

      {/**Composition Card */}
      <div className='border-2 w-1/2'>
        <div className='flex p-4 justify-around'>
          <div>
            <h5>Title</h5>
            <p>Description</p>
            <p>Duration: 3:45 | Level: Beginner | Personal: 5</p>
          </div>

          <div>
            <p>$9000.00</p>
            <button>Buy</button>
          </div>
        </div>
        <hr className='border-gray-800 w-4/5 content-center m-auto xl:w-3/5' />

        <div className='text-center'>Video</div>
      </div>


    </div>
  );
}

export default Compositions;