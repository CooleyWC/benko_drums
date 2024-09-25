import React from "react";

function Compositions() {
  return (
    <div className="bg-[#D3D3D3]">
      <div className="">
        <h1 className="">AT HOME COMPOSITION SERIES</h1>
      </div>

      {/**Composition Card */}
      <div className="w-1/2 rounded-2xl border-2 border-black">
        <div className="flex justify-around p-4">
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

        <hr className="m-auto w-4/5 content-center border-black xl:w-3/5" />

        <div className="py-4">
          <iframe
            className="rounded-2xl"
            // width="853"
            // height="480"
            src="https://www.youtube.com/embed/IQPOZMejwNY?rel=0&wmode=transparent&enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen={true}
            loading="lazy"
            title="Mug Shot"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Compositions;
