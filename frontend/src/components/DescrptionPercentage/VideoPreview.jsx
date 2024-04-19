import React, { useState, useRef } from "react";

const VideoWithPreview = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-[17%] relative">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        controls={false}
        muted={!isPlaying}
        onClick={togglePlay}
        className="w-full"
      />
      {!isPlaying && (
        <img
          src={posterSrc}
          alt="Video preview"
          className="absolute inset-0 object-cover w-full h-full cursor-pointer"
          onClick={togglePlay}
        />
      )}
    </div>
  );
};

export default VideoWithPreview;
