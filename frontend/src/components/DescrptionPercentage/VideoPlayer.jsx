import React, { useRef, useState } from "react";
import { logo_blanco } from "../../assets";
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoPlayer({ url }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); 
  };
  return (
    <div className="w-[86%] lg:[60%] ">
      <div className=" rounded-xl relative">
      <video ref={videoRef} preload="auto" autoPlay="autoplay" loop muted playsInline>
          <source src={url} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* <div className="absolute top-[50%] left-[50%]">
          <FaRegCirclePlay className="text-5xl" />
        </div> */}
        <div className="absolute bottom-4 left-2 lg:left-4 flex items-center space-x-2">
          <div className="rounded-full bg-white w-[16px] lg:w-[28px] h-[16px] lg:h-[28px] flex justify-center items-center overflow-hidden">
            <img src={logo_blanco} alt="" className="w-[10px] lg:w-[20px]" />
          </div>
          <h1 className="font-sans-600 text-sm lg:text-lg text-white">IF Beauty</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
