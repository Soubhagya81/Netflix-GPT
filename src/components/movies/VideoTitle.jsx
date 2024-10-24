import React from "react";

function VideoTitle({ title, overview, poster }) {
  return (
    <div className="">
      <div className="w-screen aspect-video pt-96 px-12 absolute text-white bg-gradient-to-r from-black/60 to-transparent">
        <div>
          <h1 className="font-bold text-4xl">{title}</h1>
          <p className="py-5 w-1/3">{overview}</p>
        </div>
        <div className=" flex w-1/3 space-x-4 py-5">
          <button className="bg-white text-stone-700 text-xl w-36 h-12 rounded-lg bg-opacity-50 flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 100 100">
              <polygon points="30,20 70,50 30,80" fill="black" />
            </svg>
            <span className="text-black left-32 text-xl">Play</span>
          </button>
          <button className="bg-white text-black text-xl w-44 h-12 rounded-lg bg-opacity-50">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
